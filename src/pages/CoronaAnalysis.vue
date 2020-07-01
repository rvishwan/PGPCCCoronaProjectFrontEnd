<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Corona cases Prediction'"
              :description="'Corona Prediction India 20-21'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
    </JqxChart>
</template>
<link rel="stylesheet" href="../../jqwidgets/styles/jqx.base.css" type="text/css" />
<script type="text/javascript" src="../../scripts/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="../../jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="../../jqwidgets/jqxchart.core.js"></script>
<script type="text/javascript" src="../../jqwidgets/jqxdraw.js"></script>
<script type="text/javascript" src="../../jqwidgets/jqxdata.js"></script>
<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    formatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'day',
                    valuesOnTicks: true,
                    minValue: '01-07-2020',
                    maxValue: '01-09-2020',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 3,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis: {
                    visible: true,
                    title: { text: 'Cumulative Corona cases (Nos)' },
                    tickMarks: { color: '#BCBCBC' }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        series:
                            [
                                { dataField: 'Fatality', displayText: 'Cumulative Corona cases' }
                            ]
                    }
                ]
            }
        },
        beforeCreate: function () {
           this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            this.source = {
                datatype: "csv",
                datafields: [
                    { name: 'Date'},
                    { name: 'Fatality'}
                ],
                url: 'https://coviddata20.s3.amazonaws.com/Pred_output.csv'
            //    url: '../sampledata/Pred_output.csv'

            };
        }
    }
</script>
<style>
</style>
