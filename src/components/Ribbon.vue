<template>
  <div class="ribbon tier">
    <div class="container">
      <div class="base"></div>
      <div class="left corner"></div>
      <div class="right corner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ribbon'
  }
</script>

<style>
/* Ribbon styling */

/* Tiers */
/* Cavansite*/
.credit .ribbon.tier-4 .corner { background: #00AFBF; }
.credit .ribbon.tier-4 .container {
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
