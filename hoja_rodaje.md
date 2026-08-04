# 🐸🦇 HOJA DE RODAJE COMPLETA — "LA RANA" (Barry's de Múnchen · noir / The Batman)
Corto largo cinematográfico (~4-6 min) · 9:16 · estética noir de Gotham (negro + lluvia + ámbar + lila de acento) · voz en off grave (jellypod/fish audio).
Herramientas: **Gemini (Veo)** + **Kling web** (lo que falle menos por plano). Duraciones 5-10s. Montaje en **DaVinci Resolve**.

====================================================================
## REGLAS DE ORO (caras y consistencia)
====================================================================
1. **ChatGPT no genera caras reales** → usar Gemini (Nano Banana) para keyframes con foto, o face-swap.
2. **Fijar la cara en una IMAGEN primero** (keyframe) y luego animar. No dejar que el vídeo "invente" la cara.
3. **Una cara real por plano.** Varias personas → un plano por cada una e intercalar en DaVinci.
4. **Menos movimiento = más parecido.** Cara grande en cuadro + luz en la cara + clip 5s.
5. **Truco still→movimiento** (plano crítico de cara): keyframe fijo bueno + **Dynamic Zoom** en DaVinci (Inspector) + overlay de lluvia (Composite Mode Screen/Add) + parpadeo de luz en la página Color = parecido perfecto sin deriva de IA.
6. **Veo mete su propio audio** → silenciar en montaje; encima va el VO.
7. Marca de agua (Kling/Veo) → se recorta en el montaje 9:16.
8. Misma seed / referencia por acto para consistencia.

Keyframe con cara (plantilla Nano Banana):
> Place this exact person in [ESCENA noir]. Keep his face 100% identical to the photo — same features and expression, do not alter or beautify. Warm light on his face, medium close-up, face large in frame, photorealistic, vertical 9:16.

====================================================================
## REPARTO (rol metafórico) y estado de diseño
====================================================================
Héroe: **Juan-92 = "LA RANA"** (vigilante, capucha con ojos/lentes, emblema lila) ✅ diseño listo · foto de Juan (cara) para el desenmascarado P13 → NECESARIA.
Cúpula: **Kili** (Patriarca, guarda la llama) ✅ · **Míchel** (Estratega) foto ✅ · **Trivi** (Mano Derecha) foto ✅ · **Chema** (Guardián del Pacto, la llave).
Muro: **Manzano** (portero → Guardián de la Última Puerta) · **Isma** (El Muro) · **Juanan** (La Garra) · **Sekou** (centinela de tierras lejanas).
Mente: **Diego** (El Titiritero) · **Izan** (Mente y Coraje).
Filos: **Pablo** (El Filo/daga) · **Ramón** (El Rayo por la izquierda).
Soldados: **Polvorilla** (La Mecha) foto ✅ · **Abel** (Primero en Jurar) · **Malick** (Gigante) · **Gaspi** (Incansable) · **Corba** (golpea desde la sombra) · **Chicharrito** (muerde) · **Juanillo** (sangre joven) · **Legaño** (nunca cierra los ojos).

Villanos (rivales → arquetipo, diseñar ORIGINAL e IP-safe, NO nombrar la marca):
- **Huargos → el Lobo** (arquetipo Joker: caos/bocazas). Sale P11 y P14. DISEÑAR.
- **Samba → los que bailaban** (arquetipo Enigma: máscara de carnaval, el verdugo). P10.
- **El Cerro → la mole** (arquetipo Bane). P6.
- **¡Qué Sofás! → el capo cómodo** (arquetipo Pingüino, en su sofá-trono). P6.
- **Los Tíos Tíos → el vanidoso doble** (arquetipo Dos Caras, obsesión imagen). P6.
- **La Bóveda → el frío sellado** (arquetipo Mr. Frío, cámara acorazada). P8.

====================================================================
## ACTO 1 — LA OSCURIDAD
====================================================================

### P0 — Apertura aérea + caída rápida (transición a P1a)
Aérea estable que reconozca la plaza + plunge veloz con motion blur (whip-cut). End frame = foto plaza gótica si se puede.
> Cinematic aerial night shot over a dark, rain-soaked Spanish gothic town. Start with a clear, steady high aerial view of the main plaza (old stone church, tall spire, fountain, wet plaza, amber street lamps), heavy rain and storm clouds — hold steady to recognize the square. Then the camera suddenly plunges straight down very fast toward the church tower with strong motion blur and speed streaks, ending in a fast blur. Moody noir, cold desaturated tones with warm amber accents, high contrast, photorealistic, no people. 9:16.
~5s. Termina en blur → fundido a P1a. (Genera 2 versiones si puedes.)

### P1 — "Los olvidados / Kili guarda la llama"
VO: "Toda ciudad tiene sus olvidados. Nosotros lo éramos. Los últimos. La ceniza al fondo del pozo. Solo uno se negó a olvidar: Kili. Él guardó la llama… hasta que alguien la empuñó."

**P1a — Establecimiento plaza** · Image-to-Video (desde foto plaza gótica) [HECHO 10s]
> Slow cinematic push-in across the dark rainy gothic plaza toward the church tower, steady rain, drifting storm clouds, the amber lamp flickering with its reflection shimmering on the wet ground, faint mist. Moody noir, high contrast, photorealistic. 9:16.

**P1b — Kili y la llama** · Image-to-Video (keyframe Kili, cara)
> The young hooded keeper slowly cups a small glowing flame in his hands, warm amber light flickering on his determined face, faint rain, embers drifting upward. Very slow intimate camera, shallow depth of field, cinematic noir. 9:16.

**P1c — Detalle llama → ojos** · Text-to-Video
> Extreme close-up of a small flame cupped in hands, sparks rising, then a slow tilt up to determined eyes catching the amber light, raindrops. Slow motion, cinematic noir, high contrast. 9:16.

**P1d — Teaser del héroe** · Image-to-Video (imagen de La Rana)
> Slow pull back into deep darkness behind the keeper; the hooded frog vigilante stands still in the shadows, only his eyes and the faint lilac frog emblem catching the light, rain falling, then fade to black. Ominous, cinematic noir, high contrast. 9:16.

### P2 — "Entra en la iglesia y enciende la chispa" (Polvorilla = La Mecha)
VO: "Y en lo más hondo de la noche… algo despertó. El hambre. Polvorilla encendió la chispa. Una mecha que ya nadie pudo apagar."

**P2a — Entra a la iglesia** · Text-to-Video (silueta)
> A lone hooded figure pushes open the tall heavy doors of a dark gothic church and steps inside out of the pouring rain; cold light spills from behind him, his silhouette in the doorway, wet stone floor reflecting a distant small altar flame, dust and haze, slow push-in, cinematic noir, high contrast, photorealistic. 9:16.

**P2b — Enciende la chispa** · Image-to-Video (keyframe Polvorilla, cara)
> Inside the dark church, the young man leans toward a small altar flame and lights a match/fuse from it; the fire flares and lights his determined face, sparks drifting up, faint rain outside, very slow intimate camera, cinematic noir, photorealistic. 9:16.

**P2c — La mecha prende / el hambre despierta** · Text-to-Video
> Extreme close-up: a spark races along a fuse in darkness, then an ember swells and flares into a growing flame, embers rising like a swarm, wet reflections, slow motion, ominous, cinematic noir. 9:16.

### P3 — "El pacto / Míchel traza el mapa" (épica)
VO: "Bajo la lluvia hicimos un pacto: no volver a arrodillarnos. Jamás. Míchel trazó el mapa en la oscuridad. Trivi, su sombra, no se apartó de su lado."

**P3a — El pacto bajo la lluvia** · Text-to-Video
> Epic low-angle shot: a circle of dark hooded figures rise to their feet in heavy night rain in a gothic plaza, fists clenched, heads lifting in defiance in unison; a lightning bolt cracks overhead, cloaks whipping, camera sweeps upward around them, slow motion, volumetric light, epic cinematic noir, high contrast. 9:16.

**P3b-1 — Míchel traza el mapa** · Image-to-Video (keyframe Míchel, cara) — plano individual
> Close cinematic shot in a dark noir war room lit by a single warm lamp: a hooded strategist leans over an old map, dragging his finger along a route as glowing lines ignite; rain on the window, a lightning flash, subtle motion, slow push-in, epic noir, photorealistic. 9:16.

**P3b-2 — Trivi vigila** · Image-to-Video (keyframe Trivi, cara) — plano individual
> Close cinematic shot in the same dark war room: a loyal guardian stands in the shadows, arms crossed, watchful, lamp light flickering on his face, rain and a lightning flash behind him, subtle motion, slow push-in, epic noir, photorealistic. 9:16.
(Intercalar Míchel/Trivi en DaVinci. Si Veo cambia la cara → truco still→movimiento (Dynamic Zoom DaVinci).)

### P4 — "Nace la Rana / se forja la orden" (ÉPICA)
VO: "No reuní a un grupo. Forjé una sombra… y me puse a su frente. Grabé el símbolo en mi pecho: la rana lila. Y la ciudad aprendió a susurrar mi nombre. A mi lado, Chema guardó las llaves; Abel, el primero en jurar; y de tierras lejanas, los gigantes: Malick y Sekou."

**P4a — La Rana se alza (reveal)** · Image-to-Video (imagen de La Rana)
> Epic hero reveal: the frog vigilante stands tall in a dark rain-soaked gothic plaza, long cape billowing; the lilac frog emblem on his chest ignites and glows bright; a lightning bolt cracks behind him. Dramatic slow motion, sweeping low-angle camera rising toward him, volumetric light, rain and embers, epic cinematic noir, high contrast. 9:16.

**P4b — La orden se forma** · Text-to-Video
> Epic wide shot: dark hooded figures emerge from the shadows and rain, lining up behind the standing vigilante; among them two towering giant warriors and one holding an old iron key; camera slowly orbits, lightning flashes, cold amber light and lilac glow, slow motion, epic cinematic noir. 9:16.

**P4c — El sigilo arde en el cielo** · Text-to-Video
> Epic shot: a glowing lilac frog sigil ignites and blazes over the dark gothic city sky like a signal, storm clouds swirling, dramatic fast push-in toward the glowing emblem, volumetric light, rain, epic cinematic noir. 9:16.

====================================================================
## ACTO 2 — LA SEÑAL Y LA CACERÍA
====================================================================

### P5 — "La señal / los 300 acuden" (Gaspi, Corba)
VO: "La señal ardió en el cielo de la penumbra. Mi señal. Trescientos la vieron. Trescientos vinieron. Los que no tenían nada que perder. Gaspi, incansable. Corba, que golpea desde la sombra."

**P5a — La señal llama, los 300 acuden** · Text-to-Video
> Epic wide shot: the glowing lilac frog-signal blazes over a dark rainy gothic city; from countless alleys, hundreds of hooded figures turn and march toward it, torches and cold amber light, storm sky, slow sweeping crane shot, epic cinematic noir, high contrast. 9:16.

**P5b — Gaspi y Corba se suman** · Text-to-Video (o keyframes si hay fotos)
> Two determined hooded fighters step forward out of the shadows into amber light, rain dripping, fists ready; quick dramatic push-in on each, epic cinematic noir, high contrast, photorealistic. 9:16.
(Si tienes fotos de Gaspi/Corba → un plano por cara.)

### P6 — "La cacería" (villanos caen: El Cerro/Bane, Qué Sofás/Pingüino, Tíos Tíos/Dos Caras)
VO: "Entonces empezó la cacería. Cayó la colina de los intocables. Cayó la casa de los cómodos. Y los que se creían dueños… cayeron sin que quedara uno en pie. Chicharrito mordía. Juanillo, sangre joven, no temía. Legaño nunca cerró los ojos."

**P6a — La cacería (barrido)** · Text-to-Video
> Fast-cut epic montage: hooded figures of the order sweep through a dark rainy gothic city at night, doors of grand houses bursting open into darkness one by one, cold rain and amber flares, dynamic slow motion, high-contrast noir, sense of relentless pursuit. 9:16.

**P6b — Cae "la mole" (El Cerro / Bane)** · Text-to-Video (villano ORIGINAL)
> A huge hulking masked brute in dark armor, mountain-like, is brought down to one knee in the rain by unseen shadow figures, dust and debris, dramatic low angle, epic cinematic noir, high contrast. Original character, no franchise likeness. 9:16.

**P6c — Cae "el capo cómodo" (Qué Sofás / Pingüino)** · Text-to-Video (ORIGINAL)
> An opulent crime boss lounging on a lavish throne-sofa in a dark hall is toppled as shadows close in, spilled luxury, cold amber light, dramatic, epic cinematic noir. Original character, no franchise likeness. 9:16.

**P6d — Cae "el vanidoso doble" (Tíos Tíos / Dos Caras)** · Text-to-Video (ORIGINAL)
> A vain, image-obsessed villain admiring himself in mirrors shatters as the mirrors crack around him in a dark rainy setting, shards flying, cold light, dramatic, epic cinematic noir. Original character, no franchise likeness. 9:16.
(Soldados Chicharrito/Juanillo/Legaño como cazadores encapuchados, feroces, en cortes rápidos.)

### P7 — "Los filos y el muro" (Pablo, Ramón, Diego, Izan, Isma, Juanan)
VO: "Cada uno era un arma. Pablo, el filo en la penumbra. Ramón, el rayo por la izquierda. Diego movía los hilos como un titiritero. Izan ponía mente y coraje. Y atrás, un muro sin grietas: Isma, que nadie cruzó, y Juanan, que jamás soltó la presa."
(Montaje rápido; una cara por plano si hay fotos, si no figuras noir. Cortes cortos ~3-4s.)

**P7a — El filo y el rayo (Pablo, Ramón)** · Text-to-Video / keyframes
> Heroic noir flashes in cold amber light: a shadow warrior draws a gleaming blade in the dark; another dashes past like a bolt of lightning trailing sparks; rain, slow motion, epic high contrast. 9:16.

**P7b — El titiritero y el coraje (Diego, Izan)** · Text-to-Video / keyframes
> A hooded figure pulls glowing strings like a puppeteer, threads of light in the dark; another stands firm with burning determination; rain, volumetric light, slow motion, epic noir. 9:16.

**P7c — El muro (Isma, Juanan)** · Text-to-Video / keyframes
> Two towering armored guardians stand immovable in the pouring rain, arms braced, unbreakable wall, low heroic angle, lightning behind, slow motion, epic cinematic noir. 9:16.

### P8 — "El abismo / La Bóveda" (Mr. Frío; Manzano cierra la última puerta)
VO: "La Bóveda nos arrastró al abismo. Al borde del vacío, no nos rompimos. Manzano cerró la última puerta. Éramos hierro."

**P8a — El frío sellado (La Bóveda)** · Text-to-Video (villano ORIGINAL)
> A massive cold sealed iron vault in a dark hall, frost and cold blue mist pouring out, an ice-cold armored guardian before it, the order pushed to the edge of an abyss, dramatic, epic cinematic noir, high contrast. Original character, no franchise likeness. 9:16.

**P8b — Manzano cierra la última puerta** · Image-to-Video (keyframe Manzano si hay foto; si no, figura)
> A lone determined figure slams a massive iron door shut against a flood of shadow and cold mist, sparks and water, straining with all his strength, dim amber light, intense noir, slow motion. 9:16.

### P9 — "Lo que acecha / la Rana temida"
VO: "Invictos. Temidos. Ya no era un hombre. Sobre los tejados, bajo la lluvia, me convertí en lo que acecha en la noche. Y en la sombra, empezaron a susurrar mi nombre… la Rana."

**P9a — La Rana sobre los tejados** · Image-to-Video (imagen de La Rana)
> Epic: the caped frog vigilante stands tall on a rooftop overlooking a dark rainy gothic city, cape moving in the wind, purple flares and amber smoke rising behind, low heroic angle, silhouette against cold light, lightning, slow motion, epic cinematic noir. 9:16.

====================================================================
## ACTO 3 — EL GOLPE, EL LOBO Y LA VENGANZA
====================================================================

### P10 — "El golpe" (la Rana NO estaba; Samba = los que bailaban) — [SILENCIO + latido antes]
VO: "Pero la noche siempre cobra su precio. Y esa noche… yo no estaba. El destino golpeó a los míos en el último aliento, y el silencio se los tragó. No estuve para evitarlo."

**P10a — Caen de rodillas (golpe colectivo)** · Text-to-Video
> A group of dark hooded figures collapse to their knees on wet asphalt in heavy night rain, heads down, a cold clock ticking to zero behind them, an empty space at the front where their leader should be, desaturated blue-black tone, slow motion, tragic cinematic noir. 9:16.
[Colectivo — no señalar a nadie. La Rana ausente.]

**P10b — El verdugo enmascarado (Samba)** · Text-to-Video (villano ORIGINAL)
> A masked carnival schemer in a rhythmic, ornate mask delivers a cold final blow from the shadows and vanishes, confetti-like ash in the rain, cold blue light, ominous, epic cinematic noir. Original character, no franchise likeness. 9:16.

### P11 — "El lobo" (Huargos)
VO: "Entonces salieron los buitres. En la sombra, aullaban. Y el lobo, más fuerte que ninguno, ladraba sobre nuestras cenizas."

**P11a — El Lobo en su trono** · Image-to-Video (keyframe villano Huargos, DISEÑAR antes)
> A menacing wolf-headed villain on a dark throne in a rain-lit alley, glowing eyes, cold smoke, floating screens with hateful whispers around him, red and amber neon, howling/laughing, epic villain entrance, high contrast noir. 9:16.

### P12 — "La tormenta"
VO: "Dicen que caímos. Que nos remataron a degüello."

**P12a — Tormenta y señal rota** · Text-to-Video
> Storm over a dark gothic city at night, thunder and cold lightning, a broken lilac frog-signal flickering weakly in the clouds, a torn purple frog banner whipping violently in the rain on a ruined rooftop, dramatic wide noir shot, black and amber tones. 9:16.

### P13 — "No puedes matar una sombra / se levanta Juan" (desenmascarado, cara de Juan)
VO: "Pero se equivocaron en algo. No puedes matar a una sombra. Volví del destierro de la noche. Y bajo la máscara de la rana se levantó un hombre: Juan. Del barro me alcé. Porque solo se dispara… a los reyes."

**P13a — La Rana se levanta del barro** · Image-to-Video (imagen de La Rana)
> Close-up of the caped frog vigilante slowly rising from the mud in the rain, frog-eyed cowl, defiant stare into camera, cold amber light glinting, the lilac emblem glowing on his chest, water dripping, epic rising moment, slow motion. 9:16.

**P13b — El hombre bajo la máscara (Juan)** · Image-to-Video (keyframe Juan, cara real) — plano crítico
> Close-up: the vigilante lowers his hood/mask revealing the determined face of a young man in the rain, amber light on his face, intense stare, slow subtle motion. Keep his face identical to the reference photo. 9:16.
(Plano de cara → usar Ken Burns si Veo no lo clava. NECESARIA foto de Juan.)

### P14 — "El karma" (Huargos cae, la orden asciende)
VO: "Y el karma tiene memoria. El que más ladró… calló. El lobo perdió su última batalla. Y nosotros nos alzamos hasta la cima."

**P14a — El Lobo derrotado / la orden asciende** · Text-to-Video (o keyframe villano)
> The wolf-headed villain kneels defeated in the rain under a glowing scoreboard reading 0-2, head lowered, while cold golden light rises behind the caped frog vigilante and his order standing tall on a high ledge above the city, poetic justice, epic cinematic noir, high contrast. 9:16.

### P15 — "La advertencia / cierre"
VO: "Esto no es un final. Es una advertencia. La Rana no muere: espera, observa y vuelve. Y cuando la señal vuelva a arder en el cielo… recordad el nombre. Porque… RESURGIREMOS."

**P15a — La orden en pie + la señal** · Image-to-Video / Text-to-Video
> Epic final wide: a full line of dark hooded figures shoulder to shoulder on a rooftop in pouring rain, the caped frog vigilante at the center, low heroic angle, backlit by cold light, the lilac frog-signal blazing brightly in the sky above the city, lightning, slow motion, epic cinematic noir. 9:16.

**P15b — Cierre a negro + título** · Text-to-Video / CapCut
> The lilac frog-signal blazes then slowly fades to black; bold text reveal "RESURGIREMOS" glows in lilac, rain sound, cinematic. 9:16.
(El texto "RESURGIREMOS" mejor ponerlo en DaVinci para que salga nítido.)

====================================================================
## PENDIENTES DE DISEÑO
====================================================================
- Foto de **Juan** (cara) para P13b (desenmascarado).
- **Huargos** (el Lobo) villano — diseñar antes de P11/P14.
- (Opcional) fotos de otros jugadores para planos individuales (P5b, P7, P8b).
- Villanos P6/P8/P10: originales IP-safe (no nombrar marcas).

## MÚSICA / SFX (guía)
- Percusión grave y lenta in crescendo + cuerdas oscuras (estilo Giacchino).
- SFX: lluvia constante, truenos, gota que cae, latido de corazón grave (fuerte antes de P10).
- Silencio total justo antes del golpe de P10.
