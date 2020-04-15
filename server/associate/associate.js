/////MODELS//////
const models = {}
models["Пользователь"]                      = require('../models/user')
models["Студент"]                              = require('../models/student')
models["Направление"]                          = require('../models/napravlenie')
models["Учебные_дисциплины"]                   = require('../models/uchebnieDiscipliny')
models["Компетенция"]                          = require('../models/competencia')
models["Индикаторы_достижения_компетенций"]    = require('../models/indicatoryDostizheniyaCompetenciy')
models["Контрольные_задания"]                  = require('../models/controlnieZadaniya')
models["Нечеткая_классфикация_зув"]            = require('../models/nechetkayaClassifikaciya')
models["Оценки_компетенций"]                   = require('../models/ocenkyCompetenciy')
models["Термы_и_область_определения"]          = require('../models/termy&oblastOpredeleniya')
models["Оценки_индикаторов"]                   = require('../models/ocenkyIndicatorov')
models["Функция_принадлежности"]               = require('../models/funciaPrinadlezhnosty')
models["Функция_принадлежности_терм"]          = require('../models/funciaPrinadlezhnostyTerm')
models["Результаты_обучения_зув"]              = require('../models/rezultatyObycheniyaZYV')
models["Индикатор_зув"]                        = require('../models/indicatorZYV')
models["Оценки_зун"]                           = require('../models/ocenkyZYN')
models["Оценки_основных_лп"]                   = require('../models/ocenkyOsnovnyxLP')
models["Оценки_зув"]                           = require('../models/ocenkyZYV')
models["Активность"]                           = require('../models/activnost')
models["Объект_контроля"]                      = require('../models/objectControlya')
models["Объект_контроля_зув"]                  = require('../models/objectControlyaZYV')
models["Эпитеты"]                              = require('../models/epitety')
models["Переменные"]                           = require('../models/peremennie')
models["Виды_переменных"]                      = require('../models/vidyPeremennyx')
models["Правила"]                              = require('../models/pravila')
models["Компоненты_правил"]                    = require('../models/componentyPravil')
//////ASSOCIATE///////

models["Пользователь"].hasOne(models["Студент"],{onDelete:'cascade'})
models["Направление"].hasMany(models["Студент"],{onDelete:'cascade'})//код_направления
models["Направление"].hasOne(models["Учебные_дисциплины"],{onDelete:'cascade'})//код_направления
//models["Направление"].hasOne(models["Компетенция"],{onDelete:'cascade'})//код_направления
models["Компетенция"].hasOne(models["Направление"],{onDelete:'cascade'})//код_направления

models["Контрольные_задания"].hasOne(models["Нечеткая_классфикация_зув"],{onDelete:'cascade'})//код_задания


models["Термы_и_область_определения"].hasOne(models["Функция_принадлежности_терм"],{onDelete:'cascade'})//терм
models["Термы_и_область_определения"].hasOne(models["Оценки_компетенций"],{onDelete:'cascade'})//терм
models["Термы_и_область_определения"].hasOne(models["Оценки_индикаторов"],{onDelete:'cascade'})//терм
models["Термы_и_область_определения"].hasOne(models["Компоненты_правил"],{onDelete:'cascade'})//терм

models["Функция_принадлежности"].hasOne(models["Функция_принадлежности_терм"],{onDelete:'cascade'})//функция_принадлежности
models["Функция_принадлежности"].hasOne(models["Переменные"],{onDelete:'cascade'})//функция_принадлежности

models["Компетенция"].hasMany(models["Индикаторы_достижения_компетенций"],{onDelete:'cascade'})//код_компетенций
models["Компетенция"].hasOne(models["Оценки_компетенций"],{onDelete:'cascade'})//код_компетенций

models["Индикаторы_достижения_компетенций"].hasMany(models["Индикатор_зув"],{onDelete:'cascade'})//код_индикатора
models["Индикаторы_достижения_компетенций"].hasOne(models["Оценки_индикаторов"],{onDelete:'cascade'})//код_индикатора

models["Результаты_обучения_зув"].hasMany(models["Индикатор_зув"],{onDelete:'cascade'})//код_зув
models["Результаты_обучения_зув"].hasOne(models["Оценки_зув"],{onDelete:'cascade'})//код_зув
models["Результаты_обучения_зув"].hasOne(models["Объект_контроля_зув"],{onDelete:'cascade'})//код_зув
models["Результаты_обучения_зув"].hasMany(models["Нечеткая_классфикация_зув"],{onDelete:'cascade'})//код_зув

models["Студент"].hasOne(models["Оценки_зун"],{onDelete:'cascade'})//id_студента
models["Студент"].hasOne(models["Оценки_основных_лп"],{onDelete:'cascade'})//id_студента

models["Оценки_основных_лп"].hasOne(models["Переменные"],{onDelete:'cascade'})//переменная
models["Оценки_основных_лп"].hasOne(models["Компоненты_правил"],{onDelete:'cascade'})//переменная

models["Оценки_компетенций"].hasOne(models["Оценки_индикаторов"],{onDelete:'cascade'})//id_оценки
models["Оценки_компетенций"].hasOne(models["Оценки_зув"],{onDelete:'cascade'})//id_оценки

//Активность

models["Объект_контроля_зув"].hasOne(models["Объект_контроля"],{onDelete:'cascade'})//id_объекта_контроля

//Эпитеты
//Виды переменных

models["Правила"].hasOne(models["Компоненты_правил"],{onDelete:'cascade'})//нечеткий_дескриптор


module.exports = models


/*
Студент-Задания

Пользователь-Студент-Направление-Компетенция-ИндикаторДостиженияКомпетенций-ИндикаторЗУВ-РезультатОбученияЗУВ-НечеткаяКлассификацияЗУВ-КонтрольныеЗадания
*/