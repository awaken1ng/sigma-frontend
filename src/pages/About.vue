<template>
  <div>
    <section class="animated fadeIn about section">
      <h1 class="title has-text-centered"><icon name="info"></icon> About Sigma</h1>
      <div class="container">
        <span>Apex Sigma</span> was created to connect to as many API endpoints as possible to bring you large amounts of data you might possibly need. <span>Wikipedia</span> articles, <span>reddit</span> posts, funny cat vidoes from <span>YouTube</span>, tasty <span>recipes</span>, <span>dictionary</span> definition, both official and urban, <span>anime</span> data and loads more. Alongside a plethora of search capabilities, Sigma has intuitive <span>moderation</span> modules to help you organize, optimize, and control, your <span>Discord</span> server. To help your community liven up and grow while having fun, it also comes with numerous fun <span>utilities</span>, <span>minigames</span> and user <span>interactions</span> for your enjoyment.
      </div>
    </section>

    <section class="animated fadeIn makers section">
      <h1 class="animated fadeIn title has-text-centered"><icon name="flag"></icon> Developers</h1>
      <div class="container">
        <div class="columns">
          <div class="column" v-for="maker in makers">
            <card class="animated fadeIn" :key=maker.name :avatar=maker.avatar :overlay=maker.overlay :name=maker.name :content=maker.about></card>
          </div>
        </div>
      </div>
    </section>

    <section class="animated fadeIn credits section">
      <h1 class="title has-text-centered"><icon name="star"></icon> Credit Where Credit Is Due</h1>
      <div class="container">
        <p>An enormous thank you to these communities that provided help and support.</p>
        <div class="credits-container">
          <div v-for="credit in credits" class="credit">
            <figure class="image is-96x96">
              <img :src=credit.image>
            </figure>
            <h6>{{ credit.name }}</h6>
          </div>
        </div>
      </div>
    </section>

    <section class="animated fadeIn donors section">
      <h1 class="title has-text-centered"><icon name="heart"></icon> Donors</h1>
      <div class="container">
        <div v-for="donor in donors" class="credit">
          <figure class="image is-96x96"><img :src=donor.avatar></figure>
          <div class="ribbon tier" :class="'tier-' + donor.tier">
            <div class="container">
              <div class="base"></div>
              <div class="left corner"></div>
              <div class="right corner"></div>
            </div>
          </div>
          <h6>{{ donor.name }}</h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Fa from '@/components/FaIcon'
import icon from '@/components/Icon'
import Stat from '@/components/Stat'
import Loader from '@/components/Loader'

export default {
  name: 'sigma',
  data () {
    return {
      makers: this.$root.pages.sigma.about.makers,
      credits: this.$root.pages.sigma.about.credits,
      donors: []
    }
  },
  components: { Navigation, Card, Fa, icon, Stat, Loader },
  // beforeMount () {
  //   let bus = this.$root.eventBus
  //   bus.$emit('nav-show')
  //   bus.$emit('page-switch', this.$route.name)
  //   bus.$emit('backdrop-light')
  //   document.title = this.$route.meta.title
  // },
  mounted () {
    let api = this.$root.api
    $.get(`${api}/donors`, (data) => {
      this.donors = data.donors
    })
  }
}
</script>

<style scoped>
.container {
  width: 100%; }
.about span {
  color: #1B6F5F;
  font-weight: 600; }

.credits .credits-container,
.donors .container {
  display: flex;
  flex-flow: wrap;
  justify-content: center; }

.credits .container {
  display: flex;
  flex-direction: column;
  align-items: center; }
.credits .container p {
  margin-bottom: 1rem; }
.credit {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.5rem 1rem; }
.credits .credit { width: 175px; }
.credit .image,
.credit h6 {
  align-self: center;
  text-align: center; }
.donors .credit .image {
  position: absolute;
  z-index: 5; }
.credit .image img { border-radius: 5rem; }

/* Ribbon styling */

/* Tiers */
/* Cavansite*/
.donors .credit .ribbon.tier-4 .corner { background: #00AFBF; }
.donors .credit .ribbon.tier-4 .container {
  border-left: 1px solid #005363;
  border-right: 1px solid #005363; }
.donors .credit .ribbon.tier-4 .base:after {
  border-left: 1px dashed #005363;
	border-right: 1px dashed #005363; }
.donors .credit .ribbon.tier-4 .base:before {
	border-left: 1px dashed #05CDDE;
	border-right: 1px dashed #05CDDE; }

/* Beryl */
.donors .credit .ribbon.tier-3 .corner { background: #FFD100; }
.donors .credit .ribbon.tier-3 .container {
  border-left: 1px solid #796500;
  border-right: 1px solid #796500; }
.donors .credit .ribbon.tier-3 .base:after {
  border-left: 1px dashed #796500;
	border-right: 1px dashed #796500; }
.donors .credit .ribbon.tier-3 .base:before {
	border-left: 1px dashed #FFFF01;
	border-right: 1px dashed #FFFF01; }

/* Hiddenite */
.donors .credit .ribbon.tier-2 .corner { background: #00BB58; }
.donors .credit .ribbon.tier-2 .container {
  border-left: 1px solid #005A2D;
  border-right: 1px solid #005A2D; }
.donors .credit .ribbon.tier-2 .base:after {
  border-left: 1px dashed #005A2D;
	border-right: 1px dashed #005A2D; }
.donors .credit .ribbon.tier-2 .base:before {
	border-left: 1px dashed #01D979;
	border-right: 1px dashed #01D979; }

/* Ametrine */
.donors .credit .ribbon.tier-1 .corner { background: #BA8EFF; }
.donors .credit .ribbon.tier-1 .container {
  border-left: 1px solid #613DC1;
  border-right: 1px solid #613DC1; }
.donors .credit .ribbon.tier-1 .base:after {
  border-left: 1px dashed #613DC1;
	border-right: 1px dashed #613DC1; }
.donors .credit .ribbon.tier-1 .base:before {
	border-left: 1px dashed #E3B4FF;
	border-right: 1px dashed #E3B4FF; }

.donors .credit .ribbon {
  left: 54px;
  bottom: 33px;
	width: 96px;
	margin: 0px auto 0;
  padding-top: 95px;
	overflow: hidden; }

.ribbon .container {
	position: relative;
	width: 20px;
	height: 20px;
	overflow: hidden;
	margin: 0 auto;
	border-left: 1px solid #292929;
	border-right: 1px solid #292929; }

.ribbon .base {
	height: 10px;
	width: 100px;
	position: relative;
	z-index: 2; }


.ribbon .base::after,
.ribbon .base::before {
  content: '';
	position: absolute;
	top: 0;
	width: 14px;
  height: 15px; }
.ribbon .base:after {
	left: 2px;
	border-left: 1px dashed #292929;
	border-right: 1px dashed #292929; }
.ribbon .base:before {
	left: 3px;
	border-left: 1px dashed #6D6D6D;
	border-right: 1px dashed #6D6D6D; }

.ribbon .corner {
  position: absolute;
  top: -40px;
  width: 50px;
	height: 50px;
  z-index: 1;
  background: #404040;
  transform: rotate(45deg); }
.ribbon .left.corner { left: -25px; }
.ribbon .right.corner { right: -25px; }
</style>
