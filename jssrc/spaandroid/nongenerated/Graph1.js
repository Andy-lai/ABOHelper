//Type your code here
function kdv_createChartWidget() {
    var chartObj = kdv_createChartJSObject();
    var chartWidget = new kony.ui.Chart2D3D({
        "id": "chartid",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100
    }, chartObj);
    return chartWidget;
}
//creating chart object with chart properties and chart data...
function kdv_createChartJSObject() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 1500,
            "title": {
                "text": "Bill History - Normal",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 12,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Bill Amount ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 100,
                        "majorInterval": 10
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearLeftToRight"],
                    "gradientRatios": [
                        [0, 40, 41, 60, 61, 100]
                    ],
                    "color": [
                        ["0x9ab93eff", "0x9ab93eff", "0x98b83dff", "0x7aa629ff", "0x76a326ff", "0x76a326ff"]
                    ]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "above",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["c1"]
            },
            "data": {
                "c1": [10, 20, 30, 40, 50, 30, 70, 80, 20, 40, 80, 40]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0xAAAAAAFF"],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["rowName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xFFFFFFff"]
                    }
                }
            }
        }
    };
    return chartInfo;
};
frmDashboard.flxGraph.graphBonusVsMonth.add(kdv_createChartWidget);