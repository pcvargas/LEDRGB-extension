Blockly.defineBlocksWithJsonArray(
[{
  "type": "rgb_smd_setup",
  "message0": "Configurar LED RGB KidBright -> R: %1 G: %2 B: %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin_r",
      "options": [
        ["OUT1 (Pin 26)", "26"],
        ["OUT2 (Pin 27)", "27"],
        ["SDA / Chain (Pin 4)", "4"],
        ["SCL / Chain (Pin 5)", "5"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "pin_g",
      "options": [
        ["OUT1 (Pin 26)", "26"],
        ["OUT2 (Pin 27)", "27"],
        ["SDA / Chain (Pin 4)", "4"],
        ["SCL / Chain (Pin 5)", "5"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "pin_b",
      "options": [
        ["OUT1 (Pin 26)", "26"],
        ["OUT2 (Pin 27)", "27"],
        ["SDA / Chain (Pin 4)", "4"],
        ["SCL / Chain (Pin 5)", "5"]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "Asigna los pines físicos externos de la KidBright32 para los canales de color.",
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