# WOD Generator — CrossFit

Generador de WODs (Workout of the Day) para CrossFit. Permite crear entrenamientos individuales y en equipo de forma aleatoria, con pesos en kilogramos y distancias en metros.

## Demo

[sebastiansepe.github.io/WodGenerator](https://sebastiansepe.github.io/WodGenerator/)

## Funcionalidades

- **Modalidades:** individual o equipo (2 a 6 atletas)
- **Estilos de equipo:** relay, sincronizado, partición libre o mixto
- **Formatos de WOD:** AMRAP, For Time, EMOM, Chipper, Tabata, Rounds For Time y modo sorpresa
- **Niveles:** Principiante, Intermedio, Avanzado y RX / Competencia
- **Categorías de movimientos:** Cardio / Monostructural, Gimnasia, Halterofilia, Core, Olímpico y Odd Objects
- **Escalado automático:** muestra pesos RX, Scaled y Principiante para hombre y mujer
- **Historial de sesión:** guarda los últimos WODs generados
- **Copiar y imprimir:** exporta el WOD como texto o lo imprime directo

## Tecnologías

HTML · CSS · JavaScript vanilla — sin dependencias ni frameworks.

## Estructura

```
WodGenerator/
├── index.html        # Estructura de la app
├── css/
│   └── styles.css    # Estilos y responsive
└── js/
    └── wod.js        # Datos de movimientos y lógica del generador
```

## Uso local

Clonar el repositorio y abrir `index.html` en el navegador. No requiere servidor ni instalación.

```bash
git clone https://github.com/SebastianSepe/WodGenerator.git
cd WodGenerator
# Abrir index.html en el navegador
```
