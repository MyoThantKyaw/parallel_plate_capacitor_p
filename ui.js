$('.ui.sidebar').sidebar({
    dimPage: false,
    mobileTransition: 'overlay',
    transition: 'overlay',
});

var btnMenu = document.getElementById("btnSetting");
btnMenu.addEventListener("click", function (evt) {
    $('.ui.sidebar').sidebar('toggle');

})


var btnInfo = document.getElementById("btnInfo");
btnInfo.addEventListener("click", function (evt) {
    $('.ui.modal').modal('show');
});

// checkboxes

// var chkSima = document.getElementById("chk-sima");
// chkSima.addEventListener("change", function (evt) {
//     // threeD.setLayerVisible(1, evt.target.checked);
// });

// var chkUpperCrust = document.getElementById("chk-upperCrust");
// chkUpperCrust.addEventListener("change", function (evt) {
//     // threeD.setLayerVisible(2, evt.target.checked);
// });

$('.ui.modal').modal({
    onHide: function () {
    }
})

$('.ui.progress').progress({showActivity : false});

var labelCapDist = document.getElementById("distance-value");

var sliderCapDist = document.getElementById("distance-slider");
sliderCapDist.addEventListener("input", function (evt) {

    threeD.changePlateDistance(sliderCapDist.value);
    labelCapDist.innerText = sliderCapDist.value + " mm";
});


var circleShapeSetting = document.getElementById('circle-shape-setting');
var squareShapeSetting = document.getElementById('square-shape-setting');

$('#plate-shape-dropdown').dropdown({
    onChange: function (val) {
        if (val === "circle") {
            squareShapeSetting.style.display = "none";
            circleShapeSetting.style.display = "block";
        }
        else if (val === "square") {
            circleShapeSetting.style.display = "none";
            squareShapeSetting.style.display = "block";
        }

        threeD.changePlateShape(val);
        // changeModel(key)

    }
})


var radiusSlider = document.getElementById("radius-slider");
var radiusPlateValue = document.getElementById("radius-plate-value");
radiusSlider.addEventListener("input", function (evt) {
    threeD.changePlateRadius(radiusSlider.value);
    radiusPlateValue.innerText = radiusSlider.value + " mm";

});

// synchronize values with labels
var radiusPlateValue = document.getElementById("radius-plate-value");
radiusPlateValue.innerText = radiusSlider.value + " mm";

// var voltageValue = document.getElementById("voltage-value");
// var voltageSlider = document.getElementById("voltage-slider");
// voltageSlider.addEventListener("input", function (evt) {
//     voltageValue.innerText = voltageSlider.value + " V";
// });

// var battDispVoltVal = document.getElementById('batt-disp-volt-val');
// battDispVoltVal.innerText = voltageSlider.value + " V";




function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}


let statusList = document.getElementById("status-list");
var msgId = 0;

let btnFullScreen = document.getElementById('btnFullScreen');
btnFullScreen.addEventListener("click", function (evt) {
    toggleFullscreen(evt);
    
})


function writeStatus(statusMsg, className){
    let status = document.createElement("li");
    status.className = className;
    
    status.innerText = statusMsg;
 
    statusList.appendChild(status);

    if(statusList.childElementCount > 10){
        statusList.removeChild(statusList.childNodes[0]); 
    }

    status.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function checkLastStatus(msg){
    return statusList.lastChild.innerText == msg;
}

function toggleFullscreen(event) {
    var element = document.body;
  
      if (event instanceof HTMLElement) {
          element = event;
      }
  
      var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
  
      element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
      document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
  
      isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  }
  