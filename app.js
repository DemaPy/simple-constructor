import { initApp } from "./helpers/initApp.js";
import { newsletter, landing } from './template.js'

let startId = "15805"
window.productsToParse = [{"name":"LARYNHILL","id":"247884"},{"name":"MADRONA","id":"247881"},{"name":"GREENWOOD","id":"247879"},{"name":"WALLINGFORD","id":"247871"},{"name":"BALLARD","id":"247828"},{"name":"EVERGREEN","id":"299755"},{"name":"MOSS","id":"374482"},{"name":"LUXEY","id":"373726"},{"name":"PORONG","id":"369395"},{"name":"RAMIS","id":"355763"},{"name":"SURIN","id":"361686"},{"name":"TAMPA","id":"372367"},{"name":"AVERYON","id":"368098"},{"name":"CHALEIX","id":"360266"},{"name":"MAXIMUS","id":"373118"},{"name":"TARUM","id":"369625"},{"name":"RUBIO","id":"157008"},{"name":"TUMEN","id":"300407"},{"name":"KOFI","id":"120292"},{"name":"KAENGAN","id":"369658"},{"name":"LEFKI","id":"261841"},{"name":"TIWANAKU","id":"316324"}]

const app = initApp({renderTo: "#app", startId}, {newsletter, landing})
app.render()