[
    {
        "id": "5448cca2.16fc2c",
        "type": "tab",
        "label": "Monitoring",
        "disabled": false,
        "info": ""
    },
    {
        "id": "2e6f3ddc.a2cba2",
        "type": "tab",
        "label": "Control",
        "disabled": false,
        "info": ""
    },
    {
        "id": "c6376f42.4c79d",
        "type": "tab",
        "label": "PID",
        "disabled": false,
        "info": ""
    },
    {
        "id": "82fd84f3.82a29",
        "type": "tab",
        "label": "GUI",
        "disabled": false,
        "info": ""
    },
    {
        "id": "5f1eef08.8d91d",
        "type": "tab",
        "label": "Updates",
        "disabled": false,
        "info": ""
    },
    {
        "id": "ab2d06b1.cd8d18",
        "type": "subflow",
        "name": "Process Simulation",
        "info": "",
        "in": [
            {
                "x": 37,
                "y": 103,
                "wires": [
                    {
                        "id": "b70080ca.b747e"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 728.5,
                "y": 294,
                "wires": [
                    {
                        "id": "6ab8c68a.b59198",
                        "port": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "d0613db7.efbfc",
        "type": "influxdb",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "8086",
        "protocol": "http",
        "database": "TkMon",
        "name": "",
        "usetls": false,
        "tls": ""
    },
    {
        "id": "75449d56.ed30d4",
        "type": "mqtt-broker",
        "z": "",
        "name": "",
        "broker": "127.0.0.1",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "76325ae.a6ef524",
        "type": "ui_tab",
        "z": "",
        "name": "Control",
        "icon": "dashboard"
    },
    {
        "id": "383b0f98.cd789",
        "type": "ui_group",
        "z": "",
        "name": "Room",
        "tab": "76325ae.a6ef524",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "496597ed.5659a8",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "true",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "9319cb25.788a38",
        "type": "ui_group",
        "z": "",
        "name": "Fridge",
        "tab": "76325ae.a6ef524",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "3d9be7a2.8a9f98",
        "type": "ui_group",
        "z": "",
        "name": "Sysinfo",
        "tab": "299e5619.d24c62",
        "order": 1,
        "disp": true,
        "width": "6"
    },
    {
        "id": "bf563344.c7a4b8",
        "type": "ui_group",
        "z": "",
        "name": "Memory",
        "tab": "299e5619.d24c62",
        "order": 2,
        "disp": true,
        "width": "6"
    },
    {
        "id": "2c911c92.fbeabc",
        "type": "ui_group",
        "z": "",
        "name": "Arduino",
        "tab": "299e5619.d24c62",
        "order": 3,
        "disp": true,
        "width": "6"
    },
    {
        "id": "119c6622.e8cab2",
        "type": "ui_group",
        "z": "",
        "name": "TwitterPosts",
        "tab": "299e5619.d24c62",
        "order": 4,
        "disp": true,
        "width": "6"
    },
    {
        "id": "bd429b1b.e7838",
        "type": "ui_group",
        "z": "",
        "name": "Weather",
        "tab": "299e5619.d24c62",
        "order": 5,
        "disp": true,
        "width": "6"
    },
    {
        "id": "bcff7773.6161b",
        "type": "ui_group",
        "z": "",
        "name": "Sarahah-Notification",
        "tab": "299e5619.d24c62",
        "order": 6,
        "disp": true,
        "width": "6"
    },
    {
        "id": "8ec263f0.6fbac8",
        "type": "ui_group",
        "z": "",
        "name": "Tweets",
        "tab": "299e5619.d24c62",
        "order": 7,
        "disp": true,
        "width": "6"
    },
    {
        "id": "299e5619.d24c62",
        "type": "ui_tab",
        "z": "",
        "name": "Good afternoon, Iheb (your feeds today )",
        "icon": "dashboard"
    },
    {
        "id": "532d2e9.fe9ab5",
        "type": "ui_group",
        "z": "",
        "name": "PID",
        "tab": "b72e4505.7d1c4",
        "disp": true,
        "width": "6"
    },
    {
        "id": "b72e4505.7d1c4",
        "type": "ui_tab",
        "z": "",
        "name": "PID",
        "icon": "dashboard"
    },
    {
        "id": "5f08de20.63ffd8",
        "type": "ui_group",
        "z": "",
        "name": "PID",
        "tab": "129df129.70766f",
        "disp": true,
        "width": "6"
    },
    {
        "id": "129df129.70766f",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    },
    {
        "id": "1b790e81.922ed9",
        "type": "influxdb out",
        "z": "5448cca2.16fc2c",
        "influxdb": "d0613db7.efbfc",
        "name": "",
        "measurement": "Sensors",
        "precision": "",
        "retentionPolicy": "",
        "x": 390,
        "y": 160,
        "wires": []
    },
    {
        "id": "861644cf.c04068",
        "type": "mqtt in",
        "z": "5448cca2.16fc2c",
        "name": "",
        "topic": "sensors/#",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 100,
        "y": 160,
        "wires": [
            [
                "c31d7c8d.cf981",
                "bf0f587d.7eec08"
            ]
        ]
    },
    {
        "id": "bf0f587d.7eec08",
        "type": "function",
        "z": "5448cca2.16fc2c",
        "name": "MQTT to InfluxDB",
        "func": "\nvar tokens = msg.topic.split(\"/\");\nvar payload = [];\nvar now = Date.now();\n\npayload.push([{\n    value: Number(msg.payload),\n    time: now * 1000000\n  }, {\n    location: tokens[1],\n    measurement: tokens[2]\n  }]);\n\nmsg.payload = payload;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 80,
        "wires": [
            [
                "1b790e81.922ed9"
            ]
        ]
    },
    {
        "id": "22ce374f.c05a38",
        "type": "mqtt in",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "switches/room/light",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "b8c44cad.97871"
            ]
        ]
    },
    {
        "id": "fa5bdaf3.96428",
        "type": "mqtt out",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "actuators/room/light",
        "qos": "2",
        "retain": "false",
        "broker": "75449d56.ed30d4",
        "x": 440,
        "y": 160,
        "wires": []
    },
    {
        "id": "b8c44cad.97871",
        "type": "ui_switch",
        "z": "82fd84f3.82a29",
        "name": "",
        "label": "light",
        "group": "383b0f98.cd789",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 290,
        "y": 80,
        "wires": [
            [
                "fa5bdaf3.96428"
            ]
        ]
    },
    {
        "id": "d9fd4cc4.310028",
        "type": "ui_gauge",
        "z": "82fd84f3.82a29",
        "name": "",
        "group": "383b0f98.cd789",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "room temperature",
        "label": "°C",
        "format": "{{value}}",
        "min": "15",
        "max": "45",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "35",
        "x": 430,
        "y": 260,
        "wires": []
    },
    {
        "id": "1268ce9b.b48ce1",
        "type": "mqtt in",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "sensors/room/temperature",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 150,
        "y": 260,
        "wires": [
            [
                "d9fd4cc4.310028"
            ]
        ]
    },
    {
        "id": "abd909d2.9f0598",
        "type": "mqtt in",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "sensors/room/humidity",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 140,
        "y": 360,
        "wires": [
            [
                "2051753.d3a110a"
            ]
        ]
    },
    {
        "id": "2051753.d3a110a",
        "type": "ui_gauge",
        "z": "82fd84f3.82a29",
        "name": "",
        "group": "383b0f98.cd789",
        "order": 3,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "room humidity",
        "label": "%",
        "format": "{{value}}",
        "min": "20",
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "60",
        "seg2": "80",
        "x": 420,
        "y": 360,
        "wires": []
    },
    {
        "id": "8e709770.be32b",
        "type": "mqtt in",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "sensors/room/dewpoint",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 140,
        "y": 460,
        "wires": [
            [
                "17bc5ab9.111895"
            ]
        ]
    },
    {
        "id": "17bc5ab9.111895",
        "type": "ui_gauge",
        "z": "82fd84f3.82a29",
        "name": "",
        "group": "383b0f98.cd789",
        "order": 4,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "room dew point",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "30",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "10",
        "seg2": "20",
        "x": 420,
        "y": 460,
        "wires": []
    },
    {
        "id": "5172cb72.fabcf4",
        "type": "mqtt in",
        "z": "5f1eef08.8d91d",
        "name": "",
        "topic": "updates/#",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "9140dd34.624d68"
            ]
        ]
    },
    {
        "id": "9140dd34.624d68",
        "type": "debug",
        "z": "5f1eef08.8d91d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 300,
        "y": 100,
        "wires": []
    },
    {
        "id": "b0f6afe5.1dac08",
        "type": "ui_gauge",
        "z": "82fd84f3.82a29",
        "name": "",
        "group": "9319cb25.788a38",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "fridge temperature",
        "label": "°C",
        "format": "{{value}}",
        "min": "15",
        "max": "45",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "35",
        "x": 430,
        "y": 560,
        "wires": []
    },
    {
        "id": "b8262e71.0fb89",
        "type": "mqtt in",
        "z": "82fd84f3.82a29",
        "name": "",
        "topic": "sensors/fridge/temperature",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 160,
        "y": 560,
        "wires": [
            [
                "b0f6afe5.1dac08"
            ]
        ]
    },
    {
        "id": "7f332fc0.ef1ad8",
        "type": "combine-delta",
        "z": "2e6f3ddc.a2cba2",
        "topic": "sensors/room/delta",
        "topicA": "sensors/room/temperature",
        "topicB": "sensors/room/dewpoint",
        "name": "",
        "x": 210,
        "y": 160,
        "wires": [
            [
                "6c344a4b.b37e4c"
            ]
        ]
    },
    {
        "id": "6c344a4b.b37e4c",
        "type": "combine-bangbang",
        "z": "2e6f3ddc.a2cba2",
        "upper": "10",
        "lower": "5",
        "invert": true,
        "name": "hysteresis",
        "x": 310,
        "y": 80,
        "wires": [
            [
                "c40e441e.da638",
                "df838217.c4dc68"
            ]
        ]
    },
    {
        "id": "c40e441e.da638",
        "type": "mqtt out",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "topic": "actuators/room/light",
        "qos": "2",
        "retain": "",
        "broker": "75449d56.ed30d4",
        "x": 460,
        "y": 160,
        "wires": []
    },
    {
        "id": "1df631b9.dc1616",
        "type": "mqtt in",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "topic": "sensors/room/#",
        "qos": "2",
        "broker": "75449d56.ed30d4",
        "x": 100,
        "y": 80,
        "wires": [
            [
                "7f332fc0.ef1ad8"
            ]
        ]
    },
    {
        "id": "4567fd6a.949bd4",
        "type": "ui_numeric",
        "z": "82fd84f3.82a29",
        "name": "",
        "label": "temperature",
        "group": "9319cb25.788a38",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "topic": "",
        "format": "{{value}}",
        "min": "15",
        "max": "45",
        "step": 1,
        "x": 430,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "c31d7c8d.cf981",
        "type": "debug",
        "z": "5448cca2.16fc2c",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 330,
        "y": 240,
        "wires": []
    },
    {
        "id": "866d772.27c2288",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "",
        "topic": "",
        "payload": "0.25",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 80,
        "wires": [
            [
                "ba515c44.f8784"
            ]
        ]
    },
    {
        "id": "97cf99b4.cfe328",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "",
        "topic": "",
        "payload": "0.5",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 131.5,
        "y": 115,
        "wires": [
            [
                "ba515c44.f8784"
            ]
        ]
    },
    {
        "id": "46d03c31.3d751c",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "",
        "topic": "",
        "payload": "0.75",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 132.5,
        "y": 152,
        "wires": [
            [
                "ba515c44.f8784"
            ]
        ]
    },
    {
        "id": "523ca018.9c315",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "",
        "topic": "",
        "payload": "0.0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 129.5,
        "y": 44,
        "wires": [
            [
                "ba515c44.f8784"
            ]
        ]
    },
    {
        "id": "f19577ad.d8cac",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "",
        "topic": "",
        "payload": "1.0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 132.5,
        "y": 189,
        "wires": [
            [
                "ba515c44.f8784"
            ]
        ]
    },
    {
        "id": "ba515c44.f8784",
        "type": "function",
        "z": "c6376f42.4c79d",
        "name": "Split Heat/Cool",
        "func": "/* A function designed to be used with node-red-contrib-pid in applications where both\n * heating and cooling are available to control the system.\n * The node is given a power value in msg.payload in the range 0 to 1, such as is produced by \n * node-red-contrib-pid and splits this into a heat power (o/p 1) and cool power (o/p 2) where\n * each is in the range 0 to 1.  These can then be fed directly into an output device, if this\n * is continuously variable, or they may be passed to node-red-contrib-timeprop nodes to generate\n * time proportioned on/off outputs.\n * There are two particular issues to be dealt with in a heat/cool application. Firstly is the fact\n * that the cooling device may be more or less powerful than the heating device. It is necessary\n * therefore to be able to adjust the gain of the system separately for heating and cooling. Secondly\n * is the highly non-linear response of some devices, notably refrigerant systems, that can have a\n * large effect initially, then this tails off. To compensate for this it is useful to have an \n * overlap range where both heat and cool are slightly on.\n *\n * To allow for these requirements two variables can be set below. The value of the power input value\n * where the heating starts to come on is determined by the variable heatMin.  Above this value the\n * heating will rise till it is fully on with an input of 1.\n * The cooling is fully on when value of the power input is 0, and falls till the cooling is fully\n * off at an input of coolMin.\n *\n * If the heating and cooling systems are of similar power then set heatMin and coolMin both to 0.5\n * in which case input values of 0.5 to 1.0 will map to heating outputs of 0.0 to 1.0,\n * and 0.5 down to 0.0 will map to cooling 0.0 to 1.0.\n * If, for example, the cooling system is more powerful than heating then they can both be set\n * to something like 0.7 which increases the gain in the heating region and reduces it\n * in the cooling region, to compensate for the different powers in the heating/cooling systems.\n * If some overlap is desired (so that both heat and cool are on slightly near the crossover\n * point) then overlap the two settings so that, for example, heatMin might be 0.45 and coolMin\n * might be 0.55\n */\n\n// set these as described above\nvar heatMin = 0.5;          // the value of input corresponding to 0 heat o/p\nvar coolMin = 0.5;          // the value of input corresponding to 0 cool o/p\n    \nvar power = msg.payload;\nvar heat = (power - heatMin)/(1 - heatMin);\n// limit to range 0 to 1\nheat = Math.min(Math.max(heat, 0), 1);\nvar cool = (coolMin - power) / coolMin;\n// limit to range 0 to 1\ncool = Math.min(Math.max(cool, 0), 1);\nreturn [{payload: heat}, {payload: cool}];\n",
        "outputs": "2",
        "noerr": 0,
        "x": 395,
        "y": 233,
        "wires": [
            [
                "3fc90ad3.b2084e",
                "24ac3fb8.37d4f"
            ],
            [
                "9db451ba.12678",
                "d4fd1476.8edaa8"
            ]
        ]
    },
    {
        "id": "9db451ba.12678",
        "type": "debug",
        "z": "c6376f42.4c79d",
        "name": "Cool",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 610,
        "y": 260,
        "wires": []
    },
    {
        "id": "3fc90ad3.b2084e",
        "type": "debug",
        "z": "c6376f42.4c79d",
        "name": "Heat",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 610,
        "y": 200,
        "wires": []
    },
    {
        "id": "418a93d4.14bbfc",
        "type": "comment",
        "z": "c6376f42.4c79d",
        "name": "Feed node-red-contrib-pid in here",
        "info": "",
        "x": 164,
        "y": 256,
        "wires": []
    },
    {
        "id": "14ee38dc.e5a0a7",
        "type": "comment",
        "z": "c6376f42.4c79d",
        "name": "To heater",
        "info": "",
        "x": 620,
        "y": 120,
        "wires": []
    },
    {
        "id": "bf71e0cb.8cd38",
        "type": "comment",
        "z": "c6376f42.4c79d",
        "name": "To Cooler",
        "info": "",
        "x": 620,
        "y": 340,
        "wires": []
    },
    {
        "id": "2d78a8cd.44937",
        "type": "function",
        "z": "ab2d06b1.cd8d18",
        "name": "30 sec RC + 20",
        "func": "// Applies a simple RC low pass filter to incoming payload values\nvar tc = 30*1000;       // time constant in milliseconds\n\nvar lastValue = context.get('lastValue');\nif (typeof lastValue == \"undefined\") lastValue = msg.payload;\nvar lastTime = context.get('lastTime') || null;\nvar now = new Date();\nvar currentValue = msg.payload;\nif (lastTime === null) {\n    // first time through\n    newValue = currentValue;\n} else {\n    var dt = now - lastTime;\n    var newValue;\n    \n    if (dt > 0) {\n        var dtotc = dt / tc;\n        newValue = lastValue * (1 - dtotc) + currentValue * dtotc;\n    } else {\n        // no time has elapsed leave output the same as last time\n        newValue = lastValue;\n    }\n}\ncontext.set('lastValue', newValue);\ncontext.set('lastTime', now);\n\nmsg.payload = newValue + 20;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 626.5,
        "y": 207,
        "wires": [
            [
                "6ab8c68a.b59198"
            ]
        ]
    },
    {
        "id": "f3d0427f.8f589",
        "type": "inject",
        "z": "ab2d06b1.cd8d18",
        "name": "Inject -0.2 at start",
        "topic": "",
        "payload": "-0.2",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 134.5,
        "y": 30,
        "wires": [
            [
                "b70080ca.b747e"
            ]
        ]
    },
    {
        "id": "6af50ebb.3ce76",
        "type": "function",
        "z": "ab2d06b1.cd8d18",
        "name": "10 sec RC",
        "func": "// Applies a simple RC low pass filter to incoming payload values\nvar tc = 10*1000;       // time constant in milliseconds\n\nvar lastValue = context.get('lastValue');\nif (typeof lastValue == \"undefined\") lastValue = msg.payload;\nvar lastTime = context.get('lastTime') || null;\nvar now = new Date();\nvar currentValue = msg.payload;\nif (lastTime === null) {\n    // first time through\n    newValue = currentValue;\n} else {\n    var dt = now - lastTime;\n    var newValue;\n    \n    if (dt > 0) {\n        var dtotc = dt / tc;\n        newValue = lastValue * (1 - dtotc) + currentValue * dtotc;\n    } else {\n        // no time has elapsed leave output the same as last time\n        newValue = lastValue;\n    }\n}\ncontext.set('lastValue', newValue);\ncontext.set('lastTime', now);\n\nmsg.payload = newValue;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 451,
        "y": 207,
        "wires": [
            [
                "2d78a8cd.44937"
            ]
        ]
    },
    {
        "id": "b70080ca.b747e",
        "type": "delay",
        "z": "ab2d06b1.cd8d18",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 268,
        "y": 104,
        "wires": [
            [
                "4dc0dddd.107a4c"
            ]
        ]
    },
    {
        "id": "2a101215.2b76be",
        "type": "function",
        "z": "ab2d06b1.cd8d18",
        "name": "2 msg transport delay",
        "func": "// stores messages in a fifo until the specified number have been received, \n// then releases them as new messages are received.\n// during the filling phase the earliest message is passed on each time \n// a message is received, but it is also left in the fifo\nvar fifoMaxLength = 2;\nvar fifo = context.get('fifo') || [];\n// push the new message onto the top of the array, messages are shifted down and\n// drop off the front\nvar length = fifo.push(msg);  // returns new length\nif (length > fifoMaxLength) {\n    newMsg = fifo.shift();\n} else {\n    // not full yet, make a copy of the msg and pass it on\n    var newMsg = JSON.parse(JSON.stringify(fifo[0]));\n}\ncontext.set('fifo', fifo);\nreturn newMsg;",
        "outputs": 1,
        "noerr": 0,
        "x": 258,
        "y": 208,
        "wires": [
            [
                "6af50ebb.3ce76"
            ]
        ]
    },
    {
        "id": "6ab8c68a.b59198",
        "type": "function",
        "z": "ab2d06b1.cd8d18",
        "name": "Clear all except payload",
        "func": "msg2 = {payload: msg.payload};\nreturn msg2;",
        "outputs": 1,
        "noerr": 0,
        "x": 545,
        "y": 293,
        "wires": [
            []
        ]
    },
    {
        "id": "4dc0dddd.107a4c",
        "type": "range",
        "z": "ab2d06b1.cd8d18",
        "minin": "0",
        "maxin": "1",
        "minout": "0",
        "maxout": "100",
        "action": "scale",
        "round": false,
        "name": "",
        "x": 87,
        "y": 208,
        "wires": [
            [
                "2a101215.2b76be"
            ]
        ]
    },
    {
        "id": "141a8b63.44c155",
        "type": "PID",
        "z": "c6376f42.4c79d",
        "name": "",
        "setpoint": "50",
        "pb": "0",
        "ti": "0",
        "td": "0",
        "integral_default": "0",
        "smooth_factor": "0",
        "max_interval": 600,
        "enable": "1",
        "disabled_op": "0",
        "x": 390,
        "y": 480,
        "wires": [
            [
                "d1225d63.b7d3e8",
                "e22f31fc.5122e"
            ]
        ]
    },
    {
        "id": "d126ff4c.30ae1",
        "type": "change",
        "z": "c6376f42.4c79d",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "op",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 629.5,
        "y": 555,
        "wires": [
            [
                "f4ae8058.cf1848"
            ]
        ]
    },
    {
        "id": "d4dcd43.7017228",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "Setpoint 30",
        "topic": "setpoint",
        "payload": "30",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 132,
        "y": 503,
        "wires": [
            [
                "141a8b63.44c155"
            ]
        ]
    },
    {
        "id": "973e642f.4770d",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "Setpoint 80",
        "topic": "setpoint",
        "payload": "80",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 130.5,
        "y": 552,
        "wires": [
            [
                "141a8b63.44c155"
            ]
        ]
    },
    {
        "id": "ea45c59c.4abe58",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "enable",
        "topic": "enable",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 123,
        "y": 388,
        "wires": [
            [
                "141a8b63.44c155"
            ]
        ]
    },
    {
        "id": "89ea6e85.f7eb2",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "disable",
        "topic": "enable",
        "payload": "false",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 123.5,
        "y": 438,
        "wires": [
            [
                "141a8b63.44c155"
            ]
        ]
    },
    {
        "id": "d1225d63.b7d3e8",
        "type": "subflow:ab2d06b1.cd8d18",
        "z": "c6376f42.4c79d",
        "name": "",
        "x": 393,
        "y": 407,
        "wires": [
            [
                "634db2ac.2e12cc",
                "141a8b63.44c155"
            ]
        ]
    },
    {
        "id": "634db2ac.2e12cc",
        "type": "change",
        "z": "c6376f42.4c79d",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "pv",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 614,
        "y": 406,
        "wires": [
            [
                "f4ae8058.cf1848"
            ]
        ]
    },
    {
        "id": "e22f31fc.5122e",
        "type": "range",
        "z": "c6376f42.4c79d",
        "minin": "0",
        "maxin": "1",
        "minout": "0",
        "maxout": "25",
        "action": "scale",
        "round": false,
        "name": "Scale power",
        "x": 455,
        "y": 555,
        "wires": [
            [
                "d126ff4c.30ae1"
            ]
        ]
    },
    {
        "id": "f4ae8058.cf1848",
        "type": "ui_chart",
        "z": "c6376f42.4c79d",
        "name": "",
        "group": "532d2e9.fe9ab5",
        "order": 0,
        "width": "6",
        "height": "6",
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#cf0005",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 819,
        "y": 480,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "119b3148.04f377",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "Clear chart on deploy",
        "topic": "",
        "payload": "{\"data\":[]}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 380,
        "y": 623,
        "wires": [
            [
                "b8665c3.6e5b6a"
            ]
        ]
    },
    {
        "id": "b8665c3.6e5b6a",
        "type": "change",
        "z": "c6376f42.4c79d",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload.data",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 616,
        "y": 623,
        "wires": [
            [
                "f4ae8058.cf1848"
            ]
        ]
    },
    {
        "id": "24ac3fb8.37d4f",
        "type": "timeprop",
        "z": "c6376f42.4c79d",
        "name": "",
        "cycleTime": 600,
        "deadTime": 0,
        "triggerPeriod": 10,
        "invert": false,
        "x": 620,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "d4fd1476.8edaa8",
        "type": "timeprop",
        "z": "c6376f42.4c79d",
        "name": "",
        "cycleTime": 600,
        "deadTime": 0,
        "triggerPeriod": 10,
        "invert": false,
        "x": 620,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "e2a2a4bc.e27c9",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "Get file",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 110,
        "y": 720,
        "wires": [
            [
                "32448c77.8f4154"
            ]
        ]
    },
    {
        "id": "32448c77.8f4154",
        "type": "file in",
        "z": "c6376f42.4c79d",
        "name": "",
        "filename": "/path/to/profile.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 279.5,
        "y": 719,
        "wires": [
            [
                "afb225d8.2d0b6"
            ]
        ]
    },
    {
        "id": "afb225d8.2d0b6",
        "type": "csv",
        "z": "c6376f42.4c79d",
        "name": "",
        "sep": ":",
        "hdrin": "",
        "hdrout": "",
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 292.5,
        "y": 763,
        "wires": [
            [
                "25877b66.28111c"
            ]
        ]
    },
    {
        "id": "c0d86f3f.0ba22",
        "type": "debug",
        "z": "c6376f42.4c79d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 725,
        "y": 748,
        "wires": []
    },
    {
        "id": "25877b66.28111c",
        "type": "change",
        "z": "c6376f42.4c79d",
        "name": "topic: csv",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "csv",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430.5,
        "y": 763,
        "wires": [
            [
                "840145b6.45afc"
            ]
        ]
    },
    {
        "id": "840145b6.45afc",
        "type": "join",
        "z": "c6376f42.4c79d",
        "name": "",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 572.5,
        "y": 810,
        "wires": [
            [
                "c0d86f3f.0ba22",
                "5b57011a.ce8e18"
            ]
        ]
    },
    {
        "id": "b437beaa.b35738",
        "type": "inject",
        "z": "c6376f42.4c79d",
        "name": "Tick",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 109,
        "y": 822,
        "wires": [
            [
                "fc5ca06f.4f1e2"
            ]
        ]
    },
    {
        "id": "5b57011a.ce8e18",
        "type": "function",
        "z": "c6376f42.4c79d",
        "name": "Calculate value",
        "func": "if (msg.topic === \"csv\") {\n    // this is a message containing the csv data\n    context.set(\"profile\", msg.payload.csv)\n    msg = null\n} else {\n    // otherwise it is a tick message\n    // get the csv array\n    var csv = context.get(\"profile\")\n    // timestamp is in msg.payload.tick\n    // do the stuff\n    msg.payload = \"some calculated value\"\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 748.5,
        "y": 810,
        "wires": [
            []
        ]
    },
    {
        "id": "fc5ca06f.4f1e2",
        "type": "change",
        "z": "c6376f42.4c79d",
        "name": "topic: tick",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "tick",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 426,
        "y": 821,
        "wires": [
            [
                "840145b6.45afc"
            ]
        ]
    },
    {
        "id": "a131fd20.f2808",
        "type": "inject",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "0.1",
        "crontab": "",
        "once": true,
        "onceDelay": "0.1",
        "x": 110,
        "y": 340,
        "wires": [
            [
                "3524697e.cc2836"
            ]
        ]
    },
    {
        "id": "3524697e.cc2836",
        "type": "trigger",
        "z": "2e6f3ddc.a2cba2",
        "op1": "true",
        "op2": "false",
        "op1type": "bool",
        "op2type": "bool",
        "duration": "100",
        "extend": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "name": "trigger",
        "x": 310,
        "y": 340,
        "wires": [
            [
                "bec054ba.9ddc",
                "b06d9042.b1724"
            ]
        ]
    },
    {
        "id": "b06d9042.b1724",
        "type": "mqtt out",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "topic": "actuators/room/light",
        "qos": "2",
        "retain": "",
        "broker": "75449d56.ed30d4",
        "x": 660,
        "y": 400,
        "wires": []
    },
    {
        "id": "bec054ba.9ddc",
        "type": "ui_chart",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "group": "383b0f98.cd789",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "5",
        "removeOlderPoints": "5",
        "removeOlderUnit": "1",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 610,
        "y": 300,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "c0618ba4.f47c5",
        "type": "debug",
        "z": "2e6f3ddc.a2cba2",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 670,
        "y": 120,
        "wires": []
    },
    {
        "id": "df838217.c4dc68",
        "type": "combine-if",
        "z": "2e6f3ddc.a2cba2",
        "topic": "",
        "name": "",
        "timeout": 0,
        "x": 330,
        "y": 220,
        "wires": [
            [],
            [
                "c0618ba4.f47c5"
            ]
        ]
    }
]
