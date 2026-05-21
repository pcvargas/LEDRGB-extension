Blockly.Python['rgb_smd_setup'] = function(block) {
  // Extrae el valor directamente del campo Dropdown seleccionado
  var value_r = block.getFieldValue('pin_r');
  var value_g = block.getFieldValue('pin_g');
  var value_b = block.getFieldValue('pin_b');
  
  Blockly.Python.definitions_['import_machine_rgb_pwm'] = 'import machine';

  Blockly.Python.definitions_['class_rgb_smd_driver'] = 
    'class RGBLedSMD:\n' +
    '    def __init__(self, pin_r, pin_g, pin_b):\n' +
    '        self.r = machine.PWM(machine.Pin(pin_r), freq=5000, duty=0)\n' +
    '        self.g = machine.PWM(machine.Pin(pin_g), freq=5000, duty=0)\n' +
    '        self.b = machine.PWM(machine.Pin(pin_b), freq=5000, duty=0)\n' +
    '    def set_color(self, r_val, g_val, b_val):\n' +
    '        r_out = max(0, min(255, int(r_val)))\n' +
    '        g_out = max(0, min(255, int(g_val)))\n' +
    '        b_out = max(0, min(255, int(b_val)))\n' +
    '        self.r.duty(int(r_out * 1023 / 255))\n' +
    '        self.g.duty(int(g_out * 1023 / 255))\n' +
    '        self.b.duty(int(b_out * 1023 / 255))\n' +
    '    def off(self):\n' +
    '        self.set_color(0, 0, 0)\n';

  var code = `rgb_smd = RGBLedSMD(${value_r}, ${value_g}, ${value_b})\n`;
  return code;
};

Blockly.Python['rgb_smd_set_color'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC) || '0';
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC) || '0';
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC) || '0';
  
  var code = `rgb_smd.set_color(${value_red}, ${value_green}, ${value_blue})\n`;
  return code;
};

Blockly.Python['rgb_smd_clear'] = function(block) {
  var code = 'rgb_smd.off()\n';
  return code;
};