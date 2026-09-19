// Carrega a config da fábrica: config.json (real) ou config.example.json (fallback).
// Nada fixo no código — todos os limites vêm daqui.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_DIR = join(__dirname, '..', 'config');

export function loadConfig() {
  const real = join(CONFIG_DIR, 'config.json');
  const example = join(CONFIG_DIR, 'config.example.json');
  const path = existsSync(real) ? real : example;
  const cfg = JSON.parse(readFileSync(path, 'utf8'));
  cfg._source = existsSync(real) ? 'config.json' : 'config.example.json';
  // Defaults de pontuação (sobrescrevíveis no config.json → scoring).
  cfg.scoring = {
    hook_rate_floor: 0.25, // 25% — abaixo disso, mata na Etapa A
    ctr_floor: 1.5, // 1,5% — piso de CTR para sobreviver
    ...(cfg.scoring || {}),
  };
  // Defaults do lançador (sobrescrevíveis no config.json → launch).
  cfg.launch = {
    // Sem Pixel: round 1 otimiza tráfego/cliques (triagem por hook/CTR).
    // Com Pixel (F2): trocar para OUTCOME_LEADS otimizando Lead/Contact.
    objective: 'OUTCOME_TRAFFIC',
    optimization_goal: 'LINK_CLICKS',
    billing_event: 'IMPRESSIONS',
    call_to_action: 'LEARN_MORE',
    status: 'PAUSED', // SEMPRE pausado na criação — ativação é passo humano
    budget_mode: 'ABO', // verba igual por unidade (ad set)
    age_min: 18,
    age_max: 65,
    ...(cfg.launch || {}),
  };
  return cfg;
}
