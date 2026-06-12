# MovPrime — Brief de Animação Promocional (handoff para o Fable)

> Documento autossuficiente, em PT-BR. Cole a seção **1 (Prompt-mestre)** no Fable como prompt
> principal e use as seções seguintes como referência detalhada (storyboard, copy, áudio, export).
> Última atualização: 2026-06-12. Produto: **MovPrime** — sensor de performance acessível para equipes.

---

## 1. Prompt-mestre (copiar/colar no Fable)

> Crie uma animação promocional **cinematográfica** para o **MovPrime**, um sensor de performance
> esportiva acessível. Estilo: **reveal de wearable** — fundo quase-preto, macro do dispositivo,
> profundidade de campo, luz e dados em *glow* neon, transições suaves e lentas com overlays de
> métricas vivas. Paleta: preto `#08090B`, **lime `#C6FF36`** (acento principal), cyan `#00E0FF`,
> magenta `#FF3DCB`. Tipografia display condensada e maiúscula (estilo Anton) + mono para dados
> (estilo Space Mono). Narrativa em 5 atos, ~18s, **loopável** (último frame casa com o primeiro),
> **30fps**. Tagline de abertura "CADA MOVIMENTO" e de fecho "VIRA DADO." A peça transforma o
> **gráfico de aceleração** em métricas nomeadas (derivada = "Snap", integral = "Impulso") e mostra
> o sensor servindo a **vários esportes** e ao **painel de uma equipe inteira**. Renderizar em
> **9:16 (1080×1920)** e **16:9 (1920×1080)**. Não mostrar um smart ring literal nem marcas de
> terceiros — é o *estilo*, não o produto da referência. Todo texto em **português**.

---

## 2. Tokens visuais (consistentes com a landing)

| Token | Valor | Uso |
|---|---|---|
| Fundo | `#08090B` | base de todas as cenas (quase-preto, moody) |
| Superfícies | `#0E1013` / `#15181D` | cards, painel |
| Texto | `#F4F5F2` · muted `#8B8E96` | títulos / labels |
| **Acento primário (lime)** | `#C6FF36` | logo, integral (área), CTA, glow do device |
| Acento data (cyan) | `#00E0FF` | curva de aceleração, dados vivos |
| Acento derivada (magenta) | `#FF3DCB` | tangente/derivada, alertas de lesão |
| Tipografia | Anton (display) · Space Grotesk (apoio) · Space Mono (dados/labels) | — |
| Movimento | ease `cubic-bezier(.16,1,.3,1)` (expo) | tudo entra/sai suave e lento |

Clima geral: escuro, premium, luz volumétrica, partículas/poeira de dados flutuando, leve grão de
filme. Cortes ritmados sincronizados ao áudio.

---

## 3. Storyboard — 9:16 (vertical · 1080×1920 · ~18s)

| t | Ato | Visual | Texto na tela (PT-BR) | Câmera / movimento |
|---|---|---|---|---|
| **0–2s** | **Hook** | Tela preta absoluta → o **sensor MovPrime** surge no centro com um pulso de luz lime que se expande em anel. LED pisca. | `CADA MOVIMENTO` (entra letra a letra, mask + translateY) | Push-in macro lento; foco respira do desfocado ao nítido. |
| **2–5s** | **Matemática viva** | A **curva de aceleração** (cyan→lime) se **desenha** da esquerda p/ direita. Em seguida a **área da integral** (lime translúcido) preenche por baixo e uma **tangente magenta** percorre a curva. | `SNAP · ∂a` (junto à tangente) · `IMPULSO · ∫a·dt` (junto à área) | Câmera trava no gráfico; leve parallax do grid ao fundo. |
| **5–11s** | **Modalidades** | Cortes rápidos, cada um ~1.3s, com callout de métrica em mono: **chute** (futebol) → **queda/scramble** (jiu-jitsu) → **soco** (boxe) → **sprint** (cardio). A cada impacto, um flash do acento da modalidade e um spike na mini-curva. | `34.2 km/h` · `6.2 g impacto` · `9.1 m/s no jab` · `184 passos/min` | Whip-pans curtos entre cenas; freeze-frame no instante do impacto. |
| **11–15s** | **Painel da equipe** | Reveal do **dashboard** do treinador: grade de cards (carga da equipe, vel. máx, sprints), avatares de vários atletas; **2 atletas piscam em magenta** (risco de lesão / assimetria). | `A EQUIPE INTEIRA, NUMA TELA` · badge `RISCO ↑ assimetria` | Pull-out revelando o painel inteiro; cards entram em stagger. |
| **15–18s** | **Fecho** | Fundo escurece; **logo MOVPRIME** (lime no "PRIME") materializa com glow; partículas assentam. Frame final casa com o preto inicial (loop). | `MOVPRIME` · `VIRA DADO.` · `Dados de elite — para a equipe inteira` · CTA `movprime.com` | Settle suave; leve flutuação do logo; fade que prepara o loop. |

**Princípios de motion:** entradas com mask + `translateY` (texto), `stroke-dashoffset` p/ desenhar a
curva, glow pulsante no device, contadores que sobem nos números. Tudo em ease expo, nada brusco
exceto os impactos das modalidades (que são o contraste rítmico).

---

## 4. Reenquadramento — 16:9 (horizontal · 1920×1080)

Mesma timeline, mesma copy, mesmas durações — muda só a **composição**:

| Ato | O que muda no 16:9 |
|---|---|
| Hook | Sensor no **terço esquerdo**; "CADA MOVIMENTO" entra à direita, alinhado ao centro vertical. |
| Matemática viva | Gráfico ocupa a **metade esquerda** (mais largo, mostra a curva inteira sem corte); labels `SNAP`/`IMPULSO` empilhados à direita. |
| Modalidades | Vira **split horizontal**: vídeo/cena à esquerda, callout de métrica grande à direita (em vez de overlay sobreposto). |
| Painel da equipe | Dashboard ocupa **largura cheia** com todos os cards visíveis de uma vez (no vertical alguns ficam abaixo da dobra). |
| Fecho | Logo centralizado; tagline e CTA na mesma linha de base, lado a lado. |

**Safe-areas:** manter texto dentro de 90% central em ambos; no 9:16, reservar ~12% no topo e na base
para UI de TikTok/Reels (não colocar copy crítica nessas faixas).

---

## 5. Cue sheet de áudio

Sincronizar batidas aos impactos visuais (adicionar na edição/no Fable se suportado):

| t | Som |
|---|---|
| 0s | Drone grave de fundo entra (sub-bass), respiração de sala. |
| ~1.8s | *Whoosh* + nota lime quando o anel de luz expande no Hook. |
| 2–5s | Bips/ticks sutis acompanhando o desenho da curva e a varredura da tangente. |
| 5–11s | **Kick/snare** marcando cada impacto (chute, queda, soco, passada); whoosh nos whip-pans. |
| 11–15s | Camada sintética sobe; "blip" de alerta quando os 2 atletas piscam em magenta. |
| 15–18s | Resolve harmônico + um último kick no logo; cauda do drone prepara o loop. |

---

## 6. Especificações de export

- **Formatos:** 9:16 `1080×1920` **e** 16:9 `1920×1080` (mesma narrativa).
- **Duração:** ~18s · **fps:** 30 · **loop:** limpo (frame final = frame inicial).
- **Codec:** MP4 / H.264, alto bitrate; versão extra com áudio e versão muda (p/ feeds sem som).
- **Legendas:** copy já é grande e legível sem som; opcional gerar `.srt` curto p/ acessibilidade.

---

## 7. Evitar (negative prompt)

- ❌ Smart ring literal ou qualquer device/marca de terceiros (Oura, Whoop, Catapult etc.) — usar
  **apenas o estilo** cinematográfico, com o sensor genérico "M" do MovPrime.
- ❌ Texto em inglês.
- ❌ Gráfico genérico de "batimento cardíaco" (ECG) — aqui é **curva de aceleração** com integral e derivada.
- ❌ Cores fora da paleta; visual claro/"clean clínico" — o clima é escuro e premium.
- ❌ Cortes longos/lentos demais no trecho de modalidades — ali o ritmo é rápido e percussivo.
