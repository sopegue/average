<template>
  <div class="px-5 py-5 w-full">
    <div class="flex flex-col space-y-8">
      <div class="flex justify-center font-semibold border-b pb-3">
        <span v-if="!$route.path.includes('/eng')" class="text-center"
          >Simuler l'origine de ma moyenne</span
        >
        <span v-else class="text-center">Simulate my average's origin</span>
      </div>
      <div
        v-if="!hasData"
        class="flex mx-auto flex-col space-y-5 justify-center items-center"
      >
        <div class="flex sm:flex-row flex-col sm:space-x-20 sm:space-y-0 space-y-5">
          <div class="flex w-fit mx-auto items-center flex-col space-y-3">
            <div class="flex space-x-3">
              <div class="flex flex-col space-y-2 items-center">
                <span v-if="!$route.path.includes('/eng')" class="w-fit text-sm"
                  >Ma moyenne</span
                >
                <span v-else class="w-fit text-sm">My average</span>
                <input
                  v-model="avg"
                  type="text"
                  :class="{
                    'border border-red': averageBool,
                  }"
                  class="outline-none w-16 h-8 p-1 text-center bg-transparent border rounded"
                />
              </div>
              <p class="w-fit text-sm block relative mt-9">/</p>
              <div class="flex flex-col space-y-2 items-center">
                <span v-if="!$route.path.includes('/eng')" class="w-fit text-sm"
                  >Totale</span
                >
                <span v-else class="w-fit text-sm">Total</span>
                <input
                  v-model="total"
                  type="text"
                  :class="{
                    'border border-red': totBool,
                  }"
                  class="outline-none w-16 h-8 p-1 text-center bg-transparent border rounded"
                />
              </div>
            </div>
          </div>
          <div
            class="flex w-fit mx-auto items-center flex-col space-y-3 justify-center self-start"
          >
            <span v-if="!$route.path.includes('/eng')" class="w-fit text-sm"
              >Nombre de matière(s)</span
            >
            <span v-else class="w-fit text-sm">Number of subject(s)</span>
            <div class="w-fit flex items-center space-x-3">
              <button @click="retract">
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <input
                v-model="nb"
                type="text"
                :class="{
                  'border border-red': nbrBool,
                }"
                class="outline-none w-16 h-8 p-1 text-center bg-transparent border rounded"
              />
              <button @click="advance">
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          class="h-8 bg-green-50 font-semibold text-black hover:bg-green-200 w-full rounded p-1 text-sm"
          @click="set"
        >
          <span v-if="!$route.path.includes('/eng')">Continuer</span>
          <span v-else>Continue</span>
        </button>
      </div>
      <div
        v-if="hasData"
        class="flex sm:flex-row flex-col sm:space-x-10 sm:space-y-0 space-y-6 pb-3 sm:justify-between border-b"
      >
        <div
          class="flex sm:flex-row flex-col sm:space-x-10 sm:space-y-0 space-y-6"
        >
          <div class="flex flex-col space-y-2 items-center">
            <span v-if="!$route.path.includes('/eng')" class="w-fit text-sm"
              >Ma moyenne</span
            >
            <span v-else class="w-fit text-sm">My average</span>
            <span class="font-semibold">{{ average }}/{{ tot }}</span>
          </div>
          <div class="flex flex-col space-y-2 items-center">
            <span v-if="!$route.path.includes('/eng')" class="w-fit text-sm"
              >Nombre de matière(s)</span
            >
            <span v-else class="w-fit text-sm">Number of subject(s)</span>
            <span class="font-semibold">{{ nbr }}</span>
          </div>
        </div>
        <button
          class="font-semibold bg-red-600 text-black hover:bg-red-700 text-white sm:w-50 w-full block h-8 rounded p-1 text-sm font-semibold"
          @click="noData"
        >
          <span v-if="!$route.path.includes('/eng')">Recommencer</span>
          <span v-else>Re-try</span>
        </button>
      </div>
    </div>
    <div v-if="hasData" class="w-fulls flex flex-col space-y-5 py-6">
      <div v-for="(j, i) in +nbr" :key="i" class="w-fulls pb-4 border-b">
        <div
          class="w-fulls flex sm:flex-row flex-col sm:space-y-0 space-y-5 sm:space-x-15"
        >
          <div class="w-fulls flex flex-col space-y-1">
            <span v-if="!$route.path.includes('/eng')" class="text-sm italic"
              >Matière {{ i + 1 }}</span
            >
            <span v-else class="text-sm italic">Subject {{ i + 1 }}</span>
            <input
              v-show="subjected && current === i"
              :id="'subjected' + i"
              v-model="matieres[3][i].subj"
              type="text"
              class="outline-none w-full h-8 px-2 py-1 bg-transparent border rounded"
              @blur="quit"
            />
            <div
              v-if="current !== i"
              class="border-none rounded p-1 w-full h-8 cursor-pointer bgg"
              @click="enter(i)"
            >
              <span class="block"
                ><span v-if="mats[3][i].subj !== ''">*</span>
                {{ mats[3][i].subj }}</span
              >
            </div>
          </div>
          <div class="sm:w-56 flex space-x-6">
            <div class="flex flex-col space-y-2 items-center">
              <span v-if="!$route.path.includes('/eng')" class="text-sm italic"
                >Note</span
              >
              <span v-else class="text-sm italic">Mark</span>
              <span class="text-sm font-semibold"
                >{{ mats[3][i].note === '' ? '??' : mats[3][i].note }} /
                {{ tot }}</span
              >
            </div>
            <div class="flex flex-col space-y-2 items-center">
              <span v-if="!$route.path.includes('/eng')" class="text-sm italic"
                >Coef.</span
              >
              <span v-else class="text-sm italic">Factor</span>
              <input
                :id="'coef' + i"
                v-model="matieres[3][i].coef"
                type="text"
                :class="{
                  'border border-red': errTab.includes(i.toString()),
                }"
                class="outline-none w-16 h-8 px-2 py-1 bg-transparent text-center border rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="loading"
        class="flex justify-center font-semibold text-sm py-2"
      >
        <span v-if="!$route.path.includes('/eng')" class="text-center"
          >Calcul en cours...</span
        >
        <span v-else class="text-center">Operation in progress...</span>
      </div>
      <button
        class="bg-green-50 font-semibold text-black hover:bg-green-200 w-full rounded p-1 h-8 text-sm"
        @click="simulate"
      >
        <span v-if="!$route.path.includes('/eng')">Simuler mes moyennes</span>
        <span v-else>Simulate my averages</span>
      </button>
    </div>
  </div>
</template>

<script>
import { cookies } from '@/cookies/cookies'
import { subj } from '@/matiere/matiere'
export default {
  data() {
    return {
      err: false,
      ressource: false,
      errTab: [],
      cookies,
      data: false,
      next: false,
      subj,
      subjChoose: [],
      subject: 'Mathématiques',
      curr: -1,
      subjecting: false,
      el: null,
      matieres: null,
      nb: '',
      avg: '',
      total: '',
      nbBool: false,
      avgBool: false,
      totalBool: false,
      load: false,
    }
  },
  computed: {
    inUsage() {
      return this.ressource === true
    },
    loading() {
      return this.load === true
    },
    error() {
      return this.err === true
    },
    hasData() {
      return this.data === true
    },
    go() {
      return this.next === true
    },
    sub() {
      return this.subj
    },
    subjected() {
      return this.subjecting === true
    },
    current() {
      return this.curr
    },
    element() {
      return this.el
    },
    mats() {
      return this.matieres
    },
    nbr() {
      return this.nb
    },
    average() {
      return this.avg
    },
    tot() {
      return this.total
    },
    nbrBool() {
      return this.nbBool === true
    },
    averageBool() {
      return this.avgBool === true
    },
    totBool() {
      return this.totalBool === true
    },
  },
  mounted() {
    this.checkCookies()
  },
  methods: {
    checkCookies() {
      if (this.cookies.checkCookie('subj')) {
        const cookie = this.cookies.getCookie('subj')
        this.matieres = JSON.parse(cookie)
        if (this.mats !== null) {
          this.avg = this.mats[0]
          this.nb = this.mats[1]
          this.total = this.mats[2]
          this.data = true
        }
        // if (fav.some((el) => el.id === this.prod.id)) {
        //   this.fav = true
        // } else {
        //   this.fav = false
        // }
      }
    },
    quit() {
      this.subjecting = false
      this.curr = -1
      this.el = null
    },
    enter(val) {
      this.quit()
      if (this.element === null || this.element === undefined)
        this.el = document.getElementById('subjected' + val)
      if (this.element !== null && this.element !== undefined) {
        this.curr = val
        this.subjecting = true
        setTimeout(() => {
          this.element.focus()
        }, 0)
      }
    },
    isNumber(val) {
      if (!val.includes(' ')) {
        if (!isNaN(val)) return true
      }
      return false
    },
    checkFormat() {
      if (this.isNumber(this.nbr) && +this.nbr !== 0) {
        this.nbBool = false
      } else {
        this.nbBool = true
      }
      if (this.isNumber(this.average) && +this.average !== 0) {
        this.avgBool = false
      } else {
        this.avgBool = true
      }
      if (this.isNumber(this.tot) && +this.tot !== 0) {
        this.totalBool = false
      } else {
        this.totalBool = true
      }
    },
    set() {
      this.checkFormat()
      if (!this.averageBool && !this.totBool && !this.nbrBool) {
        if (+this.tot >= +this.average) {
          this.nb =
            Math.abs(+this.nb).toString() === '0'
              ? ''
              : Math.abs(+this.nb).toString()
          this.avg =
            Math.abs(+this.avg).toString() === '0'
              ? ''
              : Math.abs(+this.avg).toString()
          this.total =
            Math.abs(+this.total).toString() === '0'
              ? ''
              : Math.abs(+this.total).toString()
          this.matieres = []
          this.matieres[0] = this.average
          this.matieres[1] = this.nbr
          this.matieres[2] = this.tot
          this.matieres[3] = []
          for (let index = 0; index < +this.nbr; index++) {
            const obj = {
              id: index,
              subj: this.sub[index] ? this.sub[index] : '',
              note: '',
              coef: '',
            }
            this.matieres[3].push(obj)
            setTimeout(() => {
              this.data = true
              this.cookies.setCookie('subj', this.mats, 365)
            }, 0)
          }
        } else {
          this.totalBool = true
          this.avgBool = true
        }
      }
    },
    advance() {
      if (this.isNumber(this.nbr)) this.nb = (+this.nb + 1).toString()
      else this.nb = '0'
    },
    retract() {
      if (this.isNumber(this.nbr) && +this.nbr > 0)
        this.nb = (+this.nb - 1).toString()
      else this.nb = '0'
    },
    checkSubj() {
      let i = 0
      for (let index = 0; index < this.mats[3].length; index++) {
        if (
          this.isNumber(this.mats[3][index].coef) &&
          +this.mats[3][index].coef !== 0
        ) {
          // this.err = false
          this.errTab = this.errTab.filter((x) => x !== index.toString())
        } else {
          // this.err = true
          i++
          if (!this.errTab.includes(index.toString()))
            this.errTab.push(index.toString())
        }
        if (i > 0) this.err = true
        else this.err = false
      }
    },
    getRandomInclusive(min, max) {
      const res = Math.floor(Math.random() * (max - min + 1)) + min
      return res > max ? max : res
    },
    simulate() {
      this.load = false
      this.checkSubj()
      if (!this.error) {
        this.cookies.setCookie('subj', this.mats, 365)
        this.load = true
        this.calculate()
        this.cookies.setCookie('subj', this.mats, 365)
        this.load = false
      }
    },
    calculate() {
      if (!this.inUsage) {
        this.ressource = true
        let somme = 0
        let finish = false
        let coefs = 0
        for (let index = 0; index < this.mats[3].length; index++) {
          const element = this.mats[3][index]
          coefs += +element.coef
        }

        for (let index = 0; index < this.mats[3].length; index++) {
          const element = this.mats[3][index]
          if (!finish) {
            element.note = this.getRandomInclusive(1, this.tot)
              .toFixed(2)
              .toString()
            somme += +element.note
            if (somme < coefs * +this.average) {
              if (index === this.mats[3].length - 1) {
                let sum = 0
                for (let index = 0; index < this.mats[3].length - 1; index++) {
                  const element = this.mats[3][index]
                  sum += +element.note * +element.coef
                }
                const last =
                  (coefs * +this.average - sum) / +this.mats[3][index].coef
                if (last >= 0 && last <= this.tot) {
                  this.mats[3][index].note = last.toFixed(2).toString()
                  finish = true
                } else {
                  index = -1
                  somme = 0
                }
              } else this.mats[3][index].note = element.note
            } else if (somme === coefs * +this.average) {
              this.mats[3][index].note = element.note
              for (let i = index + 1; i < this.mats[3].length; i++) {
                this.mats[3][i].note = '0'
              }
              finish = true
            } else {
              index--
            }
          }
        }

        setTimeout(() => {
          this.ressource = false
        }, 1000)
      }
    },
    noData() {
      this.data = false
      this.load = false
      this.avg = ''
      this.nb = ''
      this.total = ''
      setTimeout(() => {
        this.matieres = null
        this.cookies.setCookie('subj', this.mats, 365)
      }, 0)
    },
  },
}
</script>

<style scoped></style>
