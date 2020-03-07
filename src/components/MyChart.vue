<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill";
require("echarts/theme/macarons"); // echarts theme

const animationDuration = 3000;

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data: () => ({
    chart: null,
    option3: {
      series: [
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
          radius: "40%",
          shape: "diamond",
          center: ["25%", "25%"]
        },
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
          direction: "left",
          radius: "40%",
          shape: "rect",
          center: ["75%", "25%"]
        },
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
          radius: "40%",
          shape: "roundRect",
          center: ["25%", "75%"],
          backgroundStyle: {
            borderColor: "#156ACF",
            borderWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.4)",
            shadowBlur: 20
          },
          outline: {
            show: false
          },
          waveAnimation: false // 禁止左右波动
        },
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
          radius: "50%",
          shape: "pin",
          center: ["75%", "75%"],
          amplitude: 0,
          waveAnimation: false,
          outline: {
            show: false
          },
          backgroundStyle: {
            shadowColor: "rgba(0, 0, 0, 0.4)",
            shadowBlur: 20
          }
        }
      ]
    },
    option2: {
      series: [
        {
          type: "liquidFill",
          data: [0.5, 0.4, 0.3],
          color: ["red", "#0f0", "rgb(0, 0, 255)"],
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          }
        }
      ]
    },
    option: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      radar: {
        radius: "66%",
        center: ["50%", "42%"],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: "rgba(127,95,132,.3)",
            opacity: 1,
            shadowBlur: 45,
            shadowColor: "rgba(0,0,0,.5)",
            shadowOffsetX: 0,
            shadowOffsetY: 15
          }
        },
        indicator: [
          { name: "输出", max: 100 },
          { name: "坦度", max: 100 },
          { name: "推线", max: 100 },
          { name: "团战", max: 100 },
          { name: "支援", max: 100 },
          { name: "控制", max: 100 }
        ]
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Nirvazure", "SandM"]
      },
      series: [
        {
          type: "radar",
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [50, 70, 12, 11, 50, 40],
              name: "Nirvazure"
            },
            {
              value: [40, 90, 50, 50, 30, 10],
              name: "SandM"
            }
          ],
          animationDuration: animationDuration
        }
      ]
    }
  }),

  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption(this.option3);
    }
  }
};
</script>
