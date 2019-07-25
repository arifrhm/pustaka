/**
 * @flow
 * 
 * 📁rumus_apalan_awal_taun_sakban_abadi.js
 * Rumus untuk bulan Sawal selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from './type.js'

import {
  _MUKAROM,
  _SAPAR,
  _ROBIULAWAL,
  _ROBIULAKIR,
  _JUMADILAWAL,
  _JUMADILAKIR,
  _ROJAB,
  _SAKBAN,
  _ROMADON,
  _SAWAL,
  _DULKODAH,
  _DULKIJAH,
  ARANING_WULAN_SETAUN
} from './wulan.js'

import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'
import { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN } from './dinten.js'

// Registry
const _BAN_ALIP = Symbol.for("ban_alip")
const _BAN_EHE = Symbol.for("ban_ehe")
const _BAN_JIMAWAL = Symbol.for("ban_jimawal")
const _BAN_JE = Symbol.for("ban_je")
const _BAN_DAL = Symbol.for("ban_dal")
const _BAN_BE = Symbol.for("ban_be")
const _BAN_WAWU = Symbol.for("ban_wawu")
