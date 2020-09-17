(function($){'use strict';$.fn.barChart=function(options){var self=this,settings=$.extend({type:'horizontal',easing:'swing',animationSpeed:2000,rowClass:'barChart__row',fillClass:'barChart__barFill'},options);(function buildChart(){var rows=self.find('.'+settings.rowClass),values=[],maxDataValue;rows.each(function(index,element){var item=$(element),value=parseInt(item.data('value'),10);values.push(value);});maxDataValue=Math.max.apply(null,values);rows.each(function(index,element){var item=$(element),fill=item.find('.'+settings.fillClass),value=parseInt($(element).data('value'),10),percentage=0;if(value!==0){percentage=(value/maxDataValue)*100;}
if(settings.type==='vertical'){fill.animate({height:percentage+'%'},settings.animationSpeed,settings.easing);}else{fill.animate({width:percentage+'%'},settings.animationSpeed,settings.easing);}});}());return self;};}(jQuery));