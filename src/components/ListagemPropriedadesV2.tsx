import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ListagemPropriedades.css';

interface PropertyI18n {
  title: string;
  badge: string;
  propertyTitle: string;
  location: string;
  exclusiveText: string;
  summaryDescription: string;
  about: string[];
  infra: string[];
  facilities: string[];
  priceTag: string;
  price: string;
  installments: string;
  documents?: { label: string; url: string; legend: string }[] | null;
}

interface PropertyData {
  id: string;
  slug: string;
  category: string;
  rating: number;
  image: string;
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
    extra: string[];
  };
  mapImage: string;
  mapUrl: string;
  videoSources: string[];
  videoGalleryCredits: string | null;
  documents: { label: string; url: string; legend: string }[];
  reservationUrl: string | null;
  i18n: {
    pt: PropertyI18n;
    en: PropertyI18n;
    es: PropertyI18n;
    [key: string]: PropertyI18n;
  };
}

interface ResolvedProperty {
  id: string;
  slug: string;
  category: string;
  rating: number;
  image: string;
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
    extra: string[];
  };
  mapImage: string;
  mapUrl: string;
  videoSources: string[];
  videoGalleryCredits: string | null;
  documents: { label: string; url: string; legend: string }[];
  reservationUrl: string | null;
  title: string;
  badge: string;
  propertyTitle: string;
  location: string;
  exclusiveText: string;
  summaryDescription: string;
  about: string[];
  infra: string[];
  facilities: string[];
  priceTag: string;
  price: string;
  installments: string;
}

function resolveProperty(property: PropertyData, lang: string): ResolvedProperty {
  const baseLang = lang.split('-')[0];
  const langData = property.i18n[baseLang] || property.i18n.pt;
  return {
    id: property.id,
    slug: property.slug,
    category: property.category,
    rating: property.rating,
    image: property.image,
    gallery: property.gallery,
    mapImage: property.mapImage,
    mapUrl: property.mapUrl,
    videoSources: property.videoSources || [],
    videoGalleryCredits: property.videoGalleryCredits,
    documents: langData.documents || property.documents || [],
    reservationUrl: property.reservationUrl,
    title: langData.title,
    badge: langData.badge,
    propertyTitle: langData.propertyTitle,
    location: langData.location,
    exclusiveText: langData.exclusiveText,
    summaryDescription: langData.summaryDescription,
    about: langData.about,
    infra: langData.infra,
    facilities: langData.facilities,
    priceTag: langData.priceTag,
    price: langData.price,
    installments: langData.installments,
  };
}

const ListagemPropriedadesV2: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [rawProperties, setRawProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/properties-data.json')
      .then((res) => res.json())
      .then((data: { properties: PropertyData[] }) => {
        setRawProperties(data.properties);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading properties data:', err);
        setLoading(false);
      });
  }, []);

  const items = useMemo(() => {
    return rawProperties.map((p) => resolveProperty(p, i18n.language));
  }, [rawProperties, i18n.language]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, selectedFilter]);