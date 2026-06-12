# MovPrime — Plano de Produto, Landing Page e Animação Promocional

> Documento de plano portátil. Pode ser usado como contexto/prompt no Claude Desktop,
> no Claude Code Web (`/ultraplan`) ou em qualquer sessão para executar o build.
> Última atualização: 2026-06-11.

---

## 0. Resumo executivo

**MovPrime** é um **sensor de performance acessível** para equipes esportivas. Ele captura
aceleração em 3 eixos a alta frequência e, via matemática (derivadas e integrais do gráfico
de aceleração), gera ~14 métricas de performance e prevenção de lesão — entregando "ciência
de elite" a um preço que times de base, academias de luta e clubes amadores conseguem pagar.

**Entregáveis deste plano:**
1. **Landing page** de apresentação (captação de investidor + mostrar o produto).
2. **Animação promocional postável** (vertical 9:16 para TikTok/Reels).
3. **Animações de scroll** na própria landing.

**Público-alvo:** treinadores e equipes de diversos esportes (futebol, jiu-jitsu, boxe, MMA,
cardio e expansões). **Idioma:** PT-BR. **Objetivo principal:** ser **bonito e impactante**
para captar investidor e chamar atenção.

---

## 1. Direção de design (referências)

Duas referências definem a linguagem visual:

| Referência | O que extrair |
|---|---|
| **landonorris.com** | Dark premium, tipografia gigante (display condensado/wide), cor de acento neon, viewport-cheia, scroll com revelações, galeria horizontal de cards, muita fotografia. |
| **Vídeo TikTok de smart ring** (estilo de anúncio de wearable) | **Linguagem cinematográfica de reveal de produto**: macro do device girando, fundo escuro/moody, profundidade de campo, luz e dados em *glow*, transições suaves e lentas, overlays de métricas vivas. **Não** é o anel em si — é o *estilo* da página e da animação. |

**Tokens de marca:**
- Fundo: `#08090B` (quase preto) · superfícies `#0E1013` / `#15181D`
- Texto: `#F4F5F2` · muted `#8B8E96`
- **Acento primário (lime):** `#C6FF36`
- Acento data (cyan): `#00E0FF` · Acento derivada (magenta): `#FF3DCB`
- Tipografia: **Anton** (display gigante) · **Space Grotesk** (texto/subtítulo) · **Space Mono** (labels/dados)
- Clima: cinematográfico, escuro, glow neon, movimento suave (ease `expo`/`cubic-bezier(.16,1,.3,1)`).

---

## 2. Estratégia de produto

### 2.1 Posicionamento
Democratizar performance de elite. Concorrentes (Catapult, STATSports, WIMU) custam centenas
de € **por atleta** — inviável para base/amador/luta. Cunha: **"dados de elite a preço
acessível, para a equipe inteira"**.

### 2.2 Métricas — a "matemática vendável"
O diferencial técnico é transformar o gráfico de aceleração em insights nomeados:

| Operação matemática | Nome de marketing | O que revela |
|---|---|---|
| Aceleração (pico/média) | **Explosão** | Arranque, potência |
| Derivada da aceleração (da/dt, jerk) | **Snap / Estalo** | Velocidade de impacto, transições bruscas |
| Integral da aceleração (∫a·dt) | **Impulso / Velocidade** | Energia transferida, potência de impacto |
| Dupla integral | **Distância** | Volume de deslocamento |
| Queda do pico ao longo da sessão | **Índice de Fadiga** | Quando o atleta "apaga" |
| Esquerda vs. direita | **Assimetria** | Prevenção de lesão (forte gancho de venda) |
| Carga acumulada / ACWR | **Training Load** | Risco de overtraining |

### 2.3 Modalidades e métricas-chave

**No escopo inicial:**
- **Futebol/campo** — sprints, acel/desacel, mudanças de direção, distância, zonas, fadiga.
- **Jiu-jitsu** — explosividade em transições, densidade de scrambles, impacto de quedas (g), tempo sob esforço.
- **Boxe/MMA** — velocidade do punho (m/s), impacto (impulso), cadência golpes/min, simetria esq/dir, volume.
- **Resistência/cardio** — cadência, oscilação vertical, tempo de contato, simetria de passada, training load.

**Expansão sugerida (mesmo sensor):**
- **Basquete/Vôlei** — altura de salto (tempo de voo), nº de saltos, **RSI** (reactive strength index), impacto de aterrissagem e assimetria (risco LCA).
- **CrossFit/Levantamento** — velocidade de barra (VBT), potência, mean propulsive velocity.
- **Rugby/Handebol** — carga de colisão, nº e distribuição de impactos, tackles.
- **Tênis/Padel** — velocidade de raquete, aceleração no saque. **Atletismo** — blocos, sprints, **COD** (ângulo e velocidade de mudança de direção).
- **Natação** — cadência de braçada, tempo de virada, simetria, glide time. **Remo/Canoagem** — potência por remada, cadência, simetria.
- **Ginástica/Skate** — airtime, rotação (via giroscópio), impacto de aterrissagem. **Esgrima** — velocidade do afundo (lunge).

**Métricas transversais (valem em vários esportes, fortes para venda):**
- **Deceleration / eccentric load** — frenagem é onde mora boa parte do risco de lesão (alto valor).
- **Índice de assimetria bilateral** — esquerda vs. direita, prevenção de lesão.
- **Densidade de ações/min** (work-rate) e **distribuição de impactos** (quantos e de que magnitude).
- **Readiness / ACWR** (acute:chronic workload ratio) — prontidão e risco de overtraining.

### 2.4 Pricing (múltiplas equipes)
Modelo recomendado: **Hardware + Assinatura SaaS**, com opção *Hardware-as-a-Service* (aluguel)
para reduzir o CAPEX e reforçar o "acessível".

| Plano | Público | Faixa ilustrativa (BR) |
|---|---|---|
| **Atleta** (freemium → pago) | Amador individual | Grátis básico · R$ 19–29/mês |
| **Equipe** (até ~15 atletas) | Time de base, academia | R$ 199–349/mês |
| **Clube/Academia** (até ~50) | Clube, franquia de luta | R$ 599–899/mês |
| **Federação/White-label** | Multi-equipe | Sob consulta |

Alavancas: sensor a custo baixo (alvo R$ 199–399 ou incluso via aluguel); desconto por volume;
add-ons por modalidade; ACWR/prevenção de lesão como upsell premium. *Números a validar com a margem real.*

**Posicionamento para múltiplas equipes (a cunha):**
- **Preço por equipe, não por atleta** — é o golpe contra Catapult/STATSports/WIMU. A conta de venda:
  R$ 299 ÷ 15 atletas ≈ **R$ 20/atleta/mês**, vs. **€100+/atleta** da elite. Mostrar essa matemática explícita.
- **Hardware-as-a-Service (aluguel)** — zera o CAPEX e reforça "acessível"; sensor incluso no plano.
- **Tiers por volume / bundle multi-modalidade** — clube que roda futebol + luta + cardio num só contrato.
- **Lote fundador** com preço travado (PLG: freemium do Atleta → upsell para Equipe quando o treinador adota).
- **Federação / white-label / programas de base** (governo, confederações) e **rede de franquias de luta**.
- **Add-on premium de prevenção de lesão (ACWR)** como upsell de maior margem.
- **Anual com 2 meses grátis** para travar retenção e melhorar o caixa.

---

## 3. Landing page — especificação

**Stack:** HTML + CSS bespoke + **GSAP/ScrollTrigger + Lenis** (smooth scroll), via CDN.
Sem build, roda abrindo o arquivo ou com um static server. Hospedagem barata (Vercel/Netlify).
*(Alternativa se for virar app com dashboard real: migrar para Astro ou Next.js.)*

**Seções (ordem):**
1. **Loader** cinematográfico (logo + barra de progresso).
2. **Nav** fixo que ganha blur ao rolar.
3. **Hero** — headline gigante "CADA MOVIMENTO VIRA DADO", fundo de partículas/dados, grid,
   readout de aceleração ao vivo (estilo HUD de wearable), CTAs, stats com counter.
4. **Marquee** infinito com as modalidades.
5. **Manifesto** — "Dados de elite custaram caro demais. A MovPrime muda isso." (highlight palavra a palavra no scroll).
6. **Produto** — device com pulso/glow (estilo reveal de wearable) + 3 passos (Vista / Treine / Analise).
7. **Métricas em ação (showpiece)** — gráfico de aceleração que, no scroll, **desenha a curva**,
   sombreia a **integral** (área) e traça a **derivada** (tangente que percorre a curva). Visualiza a matemática.
8. **Modalidades** — scroll **horizontal com pin** (cards por esporte + métrica de destaque).
9. **Dashboard** — mockup do painel do treinador (carga da equipe, vel. máx, sprints, risco de lesão, fadiga).
10. **Equipes/Preços** — 3 planos (Atleta / Equipe / Clube), Equipe em destaque.
11. **CTA** — captura de email de pré-venda + "solicitar deck" para investidor.
12. **Footer** — logo gigante.

**Animações-chave:** intro com reveal de linhas (mask + translateY), counters, reveals no scroll,
marquee infinito, highlight do manifesto (scrub), chart scrub (derivada+integral), pin horizontal,
spark bars do dashboard, cursor custom, botões magnéticos. Respeitar `prefers-reduced-motion`.

**Arquivos (já prototipados neste repo):**
- `index.html` · `assets/css/main.css` · `assets/js/main.js`

---

## 4. Animação promocional postável — especificação

> **Brief completo e pronto para o Fable em [`ANIMATION_BRIEF.md`](./ANIMATION_BRIEF.md)** —
> prompt-mestre, storyboard cena-a-cena (9:16 **e** 16:9), copy PT-BR, cue sheet de áudio e specs de
> export. A animação será **gerada com o Fable** a partir desse documento. O resumo abaixo fica como visão geral.

**Formato:** vertical 1080×1920 **e** horizontal 1920×1080, ~18s, looping. **Estilo:** reveal
cinematográfico de wearable (macro, escuro, glow, dados vivos), cortes ritmados.

**Storyboard:**
| t | Cena | Visual |
|---|---|---|
| 0–2s | **Hook** | Tela preta → device surge com pulso de luz neon; tagline "CADA MOVIMENTO". |
| 2–5s | **Dados ganham vida** | Curva de aceleração se desenha; derivada e integral animam com labels (Snap / Impulso). |
| 5–11s | **Modalidades** | Cortes rápidos: chute (futebol), queda (JJ), soco (boxe) — cada um com callout de métrica. |
| 11–15s | **Painel da equipe** | Reveal do dashboard: vários atletas, comparativos, risco de lesão. |
| 15–18s | **Fecho** | Logo MOVPRIME + tagline "VIRA DADO." + gancho de preço "para a equipe inteira" + CTA. |

**Produção (decisão atual): gerar com o Fable** a partir do `ANIMATION_BRIEF.md` (9:16 + 16:9).
Alternativas, caso queira iterar fora do Fable: (A) reel web `reel/index.html` com timeline GSAP em
loop, gravando a tela para exportar MP4; (B) Remotion (vídeo em código, MP4 nativo, parametrizável).

Som: batidas sincronizadas com os impactos (kick/snare) + whoosh nas transições (cue sheet no brief).

---

## 5. Roadmap de execução (passo a passo para o Claude Desktop)

> Use este bloco como checklist de prompts ao executar no Claude Desktop.

- [ ] **Fase 0 — Marca:** finalizar logo MovPrime (wordmark + símbolo "M"), paleta e fontes (já definidas na seção 1).
- [ ] **Fase 1 — Landing scaffold:** confirmar `index.html` + `assets/css/main.css` + `assets/js/main.js` (já prototipados).
- [ ] **Fase 2 — Conteúdo real:** trocar textos/placeholders por copy final; inserir fotos reais do sensor e de atletas.
- [ ] **Fase 3 — Showpiece de métricas:** refinar a curva de aceleração com dados reais de uma sessão.
- [x] **Fase 4 — Animação postável:** brief pronto em `ANIMATION_BRIEF.md` (9:16 + 16:9) → gerar no Fable e exportar MP4.
- [ ] **Fase 5 — Polimento:** responsivo, performance (lazy/preload), SEO/OG tags ✅ (base feita), acessibilidade, deploy (Vercel/Netlify).
- [ ] **Fase 6 — Materiais de investidor:** deck/onepager reaproveitando a identidade.

---

## 6. Como continuar

- **Para usar `/ultraplan` na nuvem:** o repositório agora tem commit inicial, então a sessão na nuvem consegue rodar.
- **Para executar no Claude Desktop:** abra este `PLAN.md` como contexto e peça para executar a fase desejada.
- **Protótipo local:** abra `index.html` num navegador (ou rode um static server) para ver a landing animada já funcionando.

---

## 7. Decisões em aberto (validar)
- Nome final confirmado: **MovPrime** ✅
- Forma final do hardware (clipe em colete/faixa vs. outro formato) — definir com engenharia.
- Números de preço — validar com BOM/margem real.
- Fotos/render 3D reais do sensor — produzir.
- Versão EN da landing — opcional, futuro.
