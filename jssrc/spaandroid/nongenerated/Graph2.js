//Line Chart Plot points color indicator as columns with different marker types
//creating chart widget...
function kdv_createChartWidget2() {
    var chartObj = kdv_createChartJSObject();
    var chartWidget = new kony.ui.Chart2D3D({
        "id": "chartid",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100
    }, chartObj);
    return chartWidget;
}
//creating chart object with chart properties and chart data...
function kdv_createChartJSObject() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 60,
            "axis": {
                "type": ["xAxis", "yAxis"],
                "xAxis": {
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "orientationAngle": 45
                    }
                },
                "yAxis": {
                    "scale": {
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0]
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"]
            },
            "drawEntities": ["axis", "grid", "lineChart"],
            "lineChart": {
                "columnId": [0, 1, 2],
                "line": {
                    "color": ["0x9fd500ff", "0x22b8dbff", "0xf7d700ff"],
                    "width": [3],
                },
                "plotPoints": {
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["circle", "bubble", "square"],
                        "fillType": "color"
                    },
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"],
                    "size": [12]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008"]
            },
            "columnNames": {
                "values": ["Cash", "Deposit", "Credit"]
            },
            "data": {
                "Cash": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                "Deposit": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                "Credit": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46]
            }
        }
    };
    return chartInfo;
}
frmDashboard.flxGraph.graphCustomersvsMonth.add(kdv_createChartWidget2);