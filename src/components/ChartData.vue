<script setup>
  import { useDatabase } from '../stores/docs'
  import { BarChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  import { onMounted, ref } from 'vue';

  const dbStore = useDatabase();
  Chart.register(...registerables)

  dbStore.getData()

  const loadData = {
    labels: dbStore.dates,
    datasets: [
      {
        data: dbStore.clients,
        backgroundColor: ['#a5b4fc'],
      }
    ]
  };

  const options = ref({
    plugins: {
      legend: false,
      tooltip: {
        backgroundColor: "#323acf",
        cornerRadius: 2,
        displayColors: false,
        padding: {
          x: 12,
          y: 10
        },
        caretPadding: 8,
        caretSize: 7,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 15,
        },
        callbacks: {
          label: (context) => `Total de clientes: ${context.raw}`
        }
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Total clientes x día',
          color: "#213547",
          font: {
            size: 18,
            weight: 'bold',
          }
        }
      }
    }
  });
  // console.log('dates: ',dbStore.dates)

</script>

<template>
  <div class="mt-6">
    <p class="text-2xl text-center mb-8">Visualización del presente mes</p>
    <BarChart :chart-data="loadData" :options="options" class="mb-16"/>
  </div>
</template>


<style scoped>

</style>