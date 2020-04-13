<template>
    <div class="ocenka container-fluid">
        <div class="d-flex justify-content-around">

            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">ЗУВ</li>
                    <li class="col-6">Формулировка</li>
                    <li class="col-2">Оценка D</li>
                    <li class="col-2">Оценка F</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">З.1</div>
                        <div class="col-6">Основные закономерности передачи информации в инфокоммуникационных системах, основные виды сигналов, используемых в телекоммуникационных системах</div>
                        <div class="col-2">5,00</div>
                        <div class="col-2">Высокий</div>
                    </li>
                    <li class="d-flex">
                        <div class="col-2">У.1</div>
                        <div class="col-6">Использовать базовые средства обеспечения информационной безопасности, формировать перечень мер и средств по защите информации</div>
                        <div class="col-2">4,24</div>
                        <div class="col-2">Средний</div>
                    </li>
                </ul>     
            </div>  

            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">Код индикатора</li>
                    <li class="col-8">Формулировка</li>
                    <li class="col-2">Оценка</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">ОПК-3.1</div>
                        <div class="col-8">Знать виды и параметры сигналов, способность преобразования чисел в различные системы счисления, применение знаний физики и математики при решении практических задач</div>
                        <div class="col-2">10</div>
                    </li>
                    <li class="d-flex">
                        <div class="col-2">ОПК-3.2</div>
                        <div class="col-8">Уметь использовать базовые средства обеспечения информационной безопасности, формировать перечень мер и средств по защите информации</div>
                        <div class="col-2">8</div>
                    </li>
                </ul>     
            </div>  

        </div>

        <div class="d-flex justify-content-around">
            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">Код компетенций</li>
                    <li class="col-8">Формулировка</li>
                    <li class="col-2">Оценка</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">ОПК-3</div>
                        <div class="col-8">Способен применять методы поиска, хранения, обработки, анализа и представления в требуемом формате информации из различных источников и баз данных, соблюдая при этом основные требования информационной безопасности</div>
                        <div class="col-2">8</div>
                    </li>
                </ul>     
            </div> 

            <div class="table col-7">
                <ul class="d-flex">
                    <li class="col-2">Код компетенций</li>
                    <li class="col-5">Формулировка</li>
                    <li class="col-2">Код направления</li>
                    <li class="col-3">Тип компетенции</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">ОПК-3</div>
                        <div class="col-5">Способен применять методы поиска, хранения, обработки, анализа и представления в </div>
                        <div class="col-2">11.03.02</div>
                        <div class="col-3">Общепрофессиональные</div>
                    </li>
                </ul>     
            </div> 
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .ocenka{
        margin-top: 20px;
        .table{
            background-color: #fff;
            margin-top: 20px;
            border: solid;
            li{
                font-size: 15px;
            }
        }
        
    }
</style>