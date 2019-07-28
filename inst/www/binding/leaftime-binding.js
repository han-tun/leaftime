LeafletWidget.methods.addTimeline = function(group, data, timelineOptions, sliderOptions, onchange) {
  (function() {
    var map = this;
    var timelineControl = L.timelineSliderControl(sliderOptions);
    var timeline = L.timeline(data, timelineOptions);

    timelineControl.addTo(map);
    timelineControl.addTimelines(timeline);
    timeline.addTo(map);

    if(typeof(onchange) !== 'undefined' && onchange !== null) {
      timeline.on('change', onchange);
    }

    // not the official way for layerManager but we'll hack for now
    map.layerManager._byCategory.timeline = L.layerGroup([timelineControl, timeline]);
  }).call(this);
};
