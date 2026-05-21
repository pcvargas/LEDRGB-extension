Blockly.defineBlocksWithJsonArray(
[{
  "type": "rgb_smd_setup",
  "message0": "Configurar LED RGB Pines -> R: %1 G: %2 B: %3",
  "args0": [
    { "type": "input_value", "name": "pin_r", "check": "Number" },
    { "type": "input_value", "name": "pin_g", "check": "Number" },
    { "type": "input_value", "name": "pin_b", "check": "Number" }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "Configura los tres pines PWM de la ESP32 conectados a los canales R, G y B del módulo.",
  "helpUrl": ""
},
{
  "type": "rgb_smd_set_color",
  "message0": "LED RGB establecer color Rojo: %1 Verde: %2 Azul: %3",
  "args0": [
    { "type": "input_value", "name": "red", "check": "Number" },
    { "type": "input_value", "name": "green", "check": "Number" },
    { "type": "input_value", "name": "blue", "check": "Number" }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "Asigna intensidades de color en un rango de 0 a 255.",
  "helpUrl": ""
},
{
  "type": "rgb_smd_clear",
  "message0": "Apagar LED RGB SMD",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "Apaga por completo todos los canales de color del LED.",
  "helpUrl": ""
}]
);
