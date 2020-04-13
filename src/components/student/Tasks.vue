<template>
    <section class="container-fluid">
        <div class="tasks col-8">
            <ul class="d-flex">
                <li class="col-8">Задание</li>
                <li class="col-2">Тип</li>
                <li class="col-2">Оценка</li>
            </ul>
        
            <ul>
                <li class="d-flex task">
                    <div class="task col-8">Виды и параметры сигналов. Амплитудный спектр периодических сигналов. Уровни сигналов (децибелы). Затухание сигнала</div>
                    <div class="type col-2">Открытая форма</div>
                    <div class="assessment col-2">8</div>
                </li>
                <li class="d-flex task">
                    <div class="task col-8">Переведите двоичное число 01001101 в десятичное.</div>
                    <div class="type col-2">Тестовое задание</div>
                    <div class="assessment col-2">1</div>
                </li>
                <li class="d-flex task">
                    <div class="task col-8">Вычислите амплитуду результирующего колебания, являющегося результатом сложения двух синусоидальных сигналов с единичной амплитудой и сдвигом фаз равным 30 градусов.</div>
                    <div class="type col-2">Открытая форма</div>
                    <div class="assessment col-2">10</div>
                </li>
            </ul>          
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    section{
        margin-top: 20px;
    }
    .tasks{
        background-color: #fff;
        .task{
            margin-top: 20px;
        }
    }
</style>