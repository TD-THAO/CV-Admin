<template>
  <div class="v-chart">
    <canvas id="doughnut" v-if="isDoughnut"/>
    <canvas id="pie"  v-if="isPie"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Chart from 'chart.js'
import { TYPE } from '@/shared/enums/vue-chartjs';

@Component
export default class CycleChart extends Vue {
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({ default: 'pie' }) readonly type!: any
  readonly options: object | undefined

  get isPie() {
    return this.type === TYPE.PIE;
  }

  get isDoughnut() {
    return this.type === TYPE.DOUGHNUT;
  }

  mounted() {
    this.createChart({
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors
        }
      ],
      labels: this.labels
    })
  }

  createChart(chartData: object) {
    const canvas = document.getElementById(this.type) as HTMLCanvasElement
    const options = {
      type: this.type,
      data: chartData,
      options: this.options
    }
    new Chart(canvas, options)
  }
}
</script>
<style lang="scss">
  .v-chart {
    width: 50%;
    position: relative;
    margin: auto;
  }
</style>
