/*
Coolock is a cool clock that is using pure HTML5 and JavaScript.
Copyright (C) Farahmand Moslemi (FarahmandM) URL: https://github.com/FarahmandM/Coolock

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

/**
 * JavaScript Strict Mode
 */
'use strict';

/**
 * Coolock Definition
 */
function Coolock(options) {
	var defaultOptions = {size: 400, canvasId: 'coolock', canvasWrapperId: 'coolockWrapper', strokeColor: '#000', fillColor: '#fff', lineCap: 'round'}
	options = Object.assign({}, defaultOptions, options);
	
	[this.size, this.canvasId, this.canvasWrapperId, this.strokeColor, this.fillColor, this.lineCap] = [options.size, options.canvasId, options.canvasWrapperId, options.strokeColor, options.fillColor, options.lineCap];
	
	var canvas = document.createElement("canvas");
	[canvas.id, canvas.width, canvas.height] = [this.canvasId, this.size, this.size];
	
	document.getElementById(this.canvasWrapperId).appendChild(canvas);
	var ctx = canvas.getContext("2d");
	this.ctx = ctx;
	
	this.drawCircle = function(x, y, r, w, stroke = true, fill = false) {
		ctx = this.ctx;
		
		[ctx.strokeStyle, ctx.fillStyle, ctx.lineWidth] = [this.strokeColor, this.fillColor, w];
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		stroke && ctx.stroke();
		fill && ctx.fill();
	}
	
	this.drawLine = function(x1, y1, x2, y2, w, stroke = true, fill = false, closePath = false) {
		ctx = this.ctx;
		
		[ctx.strokeStyle, ctx.fillStyle, ctx.lineCap, ctx.lineWidth] = [this.strokeColor, this.fillColor, this.lineCap, w];
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		stroke && ctx.stroke();
		fill && ctx.fill();
		closePath && ctx.closePath();
	}
	
	this.draw = function() {
		ctx = this.ctx;
		
		this.drawCircle(this.size / 2, this.size / 2, 0.42 * this.size, 0.08 * this.size, true, true);

		for(var i = 0; i < 60; i++) {
			this.drawCircle(this.size / 2 + 0.36 * this.size * Math.cos(6 * i * Math.PI / 180), this.size / 2 + 0.36 * this.size * Math.sin(6 * i * Math.PI / 180), 0.006 * this.size, 0.006 * this.size, true);
		}
		
		for(var i = 0; i < 60; i+= 5) {
			this.drawCircle(this.size / 2 + 0.36 * this.size * Math.cos(6 * i * Math.PI / 180), this.size / 2 + 0.36 * this.size * Math.sin(6 * i * Math.PI / 180), 0.01 * this.size, 0.01 * this.size, true);
		}
	}
	
	this.redraw = function() {
		var ctx = this.ctx;

		var d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
	
		this.drawCircle(this.size / 2, this.size / 2, 0.333 * this.size, 0.01 * this.size, false, true);
		this.drawLine(this.size / 2 + 0.19 * this.size * Math.cos(30 * (h + m / 60 + s / 3600) * Math.PI / 180 - Math.PI / 2), this.size / 2 + 0.19 * this.size * Math.sin(30 * (h + m / 60 + s / 3600) * Math.PI / 180 - Math.PI / 2), this.size / 2, this.size / 2, 0.04 * this.size)
		this.drawLine(this.size / 2 + 0.31 * this.size * Math.cos(6 * (m + s / 60) * Math.PI / 180 - Math.PI / 2), this.size / 2 + 0.31 * this.size * Math.sin(6 * (m + s / 60) * Math.PI / 180 - Math.PI / 2), this.size / 2, this.size / 2, 0.03 * this.size)
		this.drawLine(this.size / 2 + 0.32 * this.size * Math.cos(6 * s * Math.PI / 180 - Math.PI / 2), this.size / 2 + 0.32 * this.size * Math.sin(6 * s * Math.PI / 180 - Math.PI / 2), this.size / 2, this.size / 2, 0.01 * this.size)
		
		ctx.fillStyle = this.strokeColor;
		ctx.beginPath();
		ctx.arc(this.size / 2, this.size / 2, 0.04 * this.size, 0, Math.PI * 2);
		ctx.fill();
	
		setTimeout(this.redraw.bind(this), 1000);
	}
	
	this.draw();
	this.redraw();
}
