({
    name: "LED RGB SMD",
    description: "Control de módulos LED RGB SMD 2026 mediante canales PWM independientes en los GPIO 18, 19 y 23.",
    author: "Pablo Cesar Vargas Diaz",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png",
    color: "#8E44AD",
    blocks: [
        {
            xml: `
                <block type="rgb_smd_setup">
                    <value name="pin_r">
                        <shadow type="math_number">
                            <field name="NUM">18</field>
                        </shadow>
                    </value>
                    <value name="pin_g">
                        <shadow type="math_number">
                            <field name="NUM">19</field>
                        </shadow>
                    </value>
                    <value name="pin_b">
                        <shadow type="math_number">
                            <field name="NUM">23</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="rgb_smd_set_color">
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">255</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "rgb_smd_clear"
    ],
    chip: [
        "ESP32"
    ]
});
