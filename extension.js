({
    name: "LED RGB KidBright",
    description: "Control de módulos LED RGB SMD 5050 usando exclusivamente los pines externos expuestos de la KidBright32.",
    author: "Pablo Cesar Vargas Diaz",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png",
    color: "#8E44AD",
    blocks: [
        "rgb_smd_setup", // Simplificado por el uso de Dropdowns
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