/*
Coolock is a cool clock that is using pure HTML5 and JavaScript.
Copyright (C) 2013  Farahmand Moslemi (CivilForYou) URL: https://github.com/CivilForYou/Coolock

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

function Coolock(CWidth, CHeight)
{
	var c = document.createElement("canvas");
	c.id = 'coolock';
	c.width = CWidth;
	c.height = CHeight;
	
	document.getElementById('coolockWrapper').appendChild(c);
	var ctx = c.getContext("2d");

	ctx.strokeStyle = '#000';
	ctx.fillStyle = '#fff';
	ctx.lineWidth = 0.04 * Math.min(CWidth, CHeight);
	ctx.beginPath();
	ctx.arc(CWidth / 2,CHeight / 2, 0.42 * Math.min(CWidth, CHeight), 0, 2 * Math.PI);
	ctx.closePath();
	ctx.stroke();

	ctx.lineWidth = 0.006 * Math.min(CWidth, CHeight);
	for(i = 0; i < 60; i++)
	{
		ctx.beginPath();
		ctx.arc(CWidth / 2 + 0.36 * Math.min(CWidth, CHeight) * Math.cos(6 * i * Math.PI / 180),CHeight / 2 + 0.36 * Math.min(CWidth, CHeight) * Math.sin(6 * i * Math.PI / 180), 0.006 * Math.min(CWidth, CHeight), 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
	}
	
	ctx.lineWidth = 0.01 * Math.min(CWidth, CHeight);
	for(i = 0; i < 60; i+= 5)
	{
		ctx.beginPath();
		ctx.arc(CWidth / 2 + 0.36 * Math.min(CWidth, CHeight) * Math.cos(6 * i * Math.PI / 180),CHeight / 2 + 0.36 * Math.min(CWidth, CHeight) * Math.sin(6 * i * Math.PI / 180), 0.01 * Math.min(CWidth, CHeight), 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
	}
	
	function _coolock()
	{
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();
		s = d.getSeconds();
	
		ctx.fillStyle = '#fff';
		
		ctx.beginPath();
		ctx.arc(CWidth / 2,CHeight / 2, 0.3301 * Math.min(CWidth, CHeight), 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
		
		ctx.lineCap = 'round';
		ctx.lineWidth = 0.04 * Math.min(CWidth, CHeight);
		ctx.beginPath();
		ctx.moveTo(CWidth / 2 + 0.19 * Math.min(CWidth, CHeight) * Math.cos(30 * (h + m / 60 + s / 3600) * Math.PI / 180 - Math.PI / 2), CHeight / 2 + 0.19 * Math.min(CWidth, CHeight) * Math.sin(30 * (h + m / 60 + s / 3600) * Math.PI / 180 - Math.PI / 2));
		ctx.lineTo(CWidth / 2, CHeight / 2);
		ctx.closePath();
		ctx.stroke();
		
		ctx.lineWidth = 0.03 * Math.min(CWidth, CHeight);
		ctx.beginPath();
		ctx.moveTo(CWidth / 2 + 0.31 * Math.min(CWidth, CHeight) * Math.cos(6 * (m + s / 60) * Math.PI / 180 - Math.PI / 2), CHeight / 2 + 0.31 * Math.min(CWidth, CHeight) * Math.sin(6 * (m + s / 60) * Math.PI / 180 - Math.PI / 2));
		ctx.lineTo(CWidth / 2, CHeight / 2);
		ctx.closePath();
		ctx.stroke();
	
		ctx.lineWidth = 0.01 * Math.min(CWidth, CHeight);
		ctx.beginPath();
		ctx.moveTo(CWidth / 2 + 0.33 * Math.min(CWidth, CHeight) * Math.cos(6 * s * Math.PI / 180 - Math.PI / 2), CHeight / 2 + 0.33 * Math.min(CWidth, CHeight) * Math.sin(6 * s * Math.PI / 180 - Math.PI / 2));
		ctx.lineTo(CWidth / 2, CHeight / 2);
		ctx.closePath();
		ctx.stroke();
		
		ctx.fillStyle = '#000';
		ctx.beginPath();
		ctx.arc(CWidth / 2, CHeight / 2, 0.04 * Math.min(CWidth, CHeight), 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	
		setTimeout(_coolock, 1000);
	}

	_coolock();
}
