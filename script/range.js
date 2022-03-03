let range1Indecator = null;
let range2Indecator = null;
let range3Indecator = null;
let range4Indecator = null;
let lastRangChanged = 0;
let surveyWidth = $('.survey-container').width();
let url = 'url(' + $('.range-curve').prop('src') + ')';

let scrollHeightR1 = 0;
let scrollHeightR2 = 0;

// Position of span that shows range value and tick curve position
const tickContainer = document.querySelector('#range-wrapp-1');
const range = document.getElementById('range');
const rangeV = document.getElementById('rangeValue');
let rangeChanging = 0;

const rangeDefaultState = () => {
  let defaultMaskProperties = `0% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right 0% top 20px/calc(200% - 60px) 4px`;
  let defaultProperties = url + defaultMaskProperties;
  let rangeEl = document.querySelectorAll('.input-el');
  console.log(defaultProperties)
  for (let i = 0; i < rangeEl.length; i++) {
    $((rangeEl)[i]).parents().find('.ticks').css({
      '-webkit-mask': defaultProperties,
      '-webkit-mask-repeat': 'no-repeat',
    });
  }
}

document.addEventListener("DOMContentLoaded", rangeDefaultState);

const setValue = () => {
  // Span position and inner value
  let newValue = Number((range.value - range.min) * 10 / (range.max - range.min));
  const newPosition = newValue;
  rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
  $('#points-box').text(newValue);



  // Tick curve position
  let newP = (newValue / 10) * 100;
  newP = newP.toString();
  let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, green calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), green 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
  let newProperties = url + newMaskProperties;
  console.log(newMaskProperties)
  $('#tickContainer').css('-webkit-mask', newProperties);
  $('#tickContainer').css('-webkit-mask-repeat', 'no-repeat');
  $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
  $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  let pointMarks = $('#range-wrapp-1 .point-marck');

  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    $(range).attr('step', '1');
    newValue = 0;
    range1Indecator = 0;
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#points-box').css('opacity', '1');
    $('#points-box').text(newValue);
    $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $(range).css({
      'width': '128%',
      'margin-left': '-12%'
    });
  }

  if (newValue == 0) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $('#points-box').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
  if (newValue == 1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[1]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-53%)');
    $('#points-box').css({
      'transform': 'translateX(-5px)',
      'color': '#CD0800'
    });
  }
  if (newValue == 2) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[2]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-55%)');
    $('#points-box').css({
      'transform': 'translateX(-5px)',
      'color': '#F45800'
    });
  }
  if (newValue == 3) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[3]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-61%)');
    $('#points-box').css({
      'transform': 'translateX(-7px)',
      'color': '#F45800'
    });
  }
  if (newValue == 4) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[4]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-63%)');
    $('#points-box').css({
      'transform': 'translateX(-9px)',
      'color': '#FFB800'
    });
  }
  if (newValue == 5) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[5]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-68%)');
    $('#points-box').css({
      'transform': 'translateX(-9px)',
      'color': '#D7E317'
    });
  }
  if (newValue == 6) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[6]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-71%)');
    $('#points-box').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 7) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[7]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-72%)');
    $('#points-box').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 8) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[8]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-79%)');
    $('#points-box').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 9) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[9]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-80%)');
    $('#points-box').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 10) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[10]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-86%)');
    $('#points-box').css({
      'transform': 'translateX(-17px)',
      'color': '#00D086'
    });
    if (surveyWidth > 420) {
      $('#rangeValue').css('transform', 'translateX(-89%)');
    }
  }
  if (newValue == 0.1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $('#points-box').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
};

// Initialize setValue onload and oninput
// document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


$(range).on('change', function () {
  rangeChanging = 1;
  let pointMarks = $('#range-wrapp-1 .point-marck');
  let pointIndicator = null;

  if (scrollHeightR1 == 0) {
    let haightSum = $('.header').innerHeight() + $('.q-box-0').innerHeight();
    $('#survey-container').css('min-height', `calc(${haightSum - 20}px + 100vh)`);
  }

  scrollHeightR1 = 1;

  if (rangeChanging === 1) {
    $('.q-box-1').fadeIn();

    let nextPosition = $('.q-box-1').offset().top;
    console.log(nextPosition);
    $('html, body').animate({
      scrollTop: nextPosition
    }, 500);

    // Span position and inner value
    $(this).parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    let newValue = Math.round(((range.value - range.min) * 10 / (range.max - range.min) * 1));
    const newPosition = newValue;
    rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box').text(newValue);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, green calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), green 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
    let newProperties = url + newMaskProperties;
    console.log(newMaskProperties)
    $('#tickContainer').css('-webkit-mask', newProperties);
    $('#tickContainer').css('-webkit-mask-repeat', 'no-repeat');
    $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

    console.log(newValue)
    $(range).val(newValue);
    $('#points-box').css('opacity', '1');
    $(range).attr('step', '1');
    $(range).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    if (newValue == 0) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-50%)');
      $('#points-box').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue == 1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[1]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-53%)');
      $('#points-box').css({
        'transform': 'translateX(-5px)',
        'color': '#CD0800'
      });
    }
    if (newValue == 2) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[2]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-55%)');
      $('#points-box').css({
        'transform': 'translateX(-5px)',
        'color': '#F45800'
      });
    }
    if (newValue == 3) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[3]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-61%)');
      $('#points-box').css({
        'transform': 'translateX(-7px)',
        'color': '#F45800'
      });
    }
    if (newValue == 4) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[4]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-63%)');
      $('#points-box').css({
        'transform': 'translateX(-9px)',
        'color': '#FFB800'
      });
    }
    if (newValue == 5) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[5]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-68%)');
      $('#points-box').css({
        'transform': 'translateX(-9px)',
        'color': '#D7E317'
      });
    }
    if (newValue == 6) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[6]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-71%)');
      $('#points-box').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 7) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[7]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-72%)');
      $('#points-box').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 8) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[8]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-79%)');
      $('#points-box').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 9) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[9]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-80%)');
      $('#points-box').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 10) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[10]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-86%)');
      $('#points-box').css({
        'transform': 'translateX(-17px)',
        'color': '#00D086'
      });
      if (surveyWidth > 420) {
        $('#rangeValue').css('transform', 'translateX(-89%)');
      }
    }
    // if (newValue < 2) {
    //   $('#rangeValue').css('transform', 'translateX(-50%)');
    // }
    if (newValue <= 6) {
      range1Indecator = 0;
    } else if (newValue > 6) {
      range1Indecator = 1;
    }
  }
  console.log('Indicator');
  console.log(range1Indecator);
});

// console.log('points arr')
// console.log(allValues);



/** Second range */


// range2StateObj = {
//   situation1: [{
//     url: './img/range2-icons/resume.svg',
//     text: 'Неудобная подача заявки'
//   }, {
//     url: './img/range2-icons/files.svg',
//     text: 'Большое кол-во требуемых документов/объём анкеты'
//   }, {
//     url: './img/range2-icons/clock.svg',
//     text: 'Долгое оформление'
//   }, {
//     url: './img/range2-icons/bad-review.svg',
//     text: 'Неудобное получение продукта'
//   }, {
//     url: './img/range2-icons/help.svg',
//     text: 'Нежелание сотрудника помочь'
//   }],


//   situation2: [{
//     url: './img/range2-icons/resume.svg',
//     text: 'Неудобная подача заявки'
//   }, {
//     url: './img/range2-icons/files.svg',
//     text: 'Большое кол-во требуемых документов/объём анкеты'
//   }, {
//     url: './img/range2-icons/clock.svg',
//     text: 'Долгое оформление'
//   }, {
//     url: './img/range2-icons/bad-review.svg',
//     text: 'Неудобное получение продукта'
//   }, {
//     url: './img/range2-icons/help.svg',
//     text: 'Нежелание сотрудника помочь'
//   }],

//   situation3: [{
//     url: './img/range2-icons/resume.svg',
//     text: 'Удобство подачи заявки'
//   }, {
//     url: './img/range2-icons/files.svg',
//     text: 'Не требуется много документов'
//   }, {
//     url: './img/range2-icons/clock.svg',
//     text: 'Быстрое оформление'
//   }, {
//     url: './img/range2-icons/good-review.svg',
//     text: 'Удобное получение продукта'
//   }, {
//     url: './img/range2-icons/help.svg',
//     text: 'Желание сотрудника помочь'
//   }],
// }



const tickContainer2 = document.querySelector('#range-wrapp-2');
const range2 = document.getElementById('range2');
const rangeV2 = document.getElementById('rangeValue2');
let rangeChanging2 = 0;

const setValue2 = () => {
  // Span position and inner value
  let newValue = Number((range2.value - range2.min) * 10 / (range2.max - range2.min));
  const newPosition = newValue;
  rangeV2.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
  $('#points-box2').text(newValue);

  // Tick curve position
  let newP = (newValue / 10) * 100;
  newP = newP.toString();
  let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
  let newProperties = url + newMaskProperties;
  $('#tickContainer2').css('-webkit-mask', newProperties);
  $('#tickContainer2').css('-webkit-mask-repeat', 'no-repeat');
  $('#tickContainer2').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
  $('#points-box2').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  let pointMarks = $('#range-wrapp-2 .point-marck');

  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    range2Indecator = 0;
    // $('.small-number').text('6');
    // $(".marker-container .marker:last-child").show();
    // $('.marker').css('width', '16%');
    // $('#range2').change();
    $(range2).attr('step', '1');
    $('#tickContainer2').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    // $('.q-box-2').fadeIn();
    newValue = 0;
    $('#points-box2').css('opacity', '1');
    $('#points-box2').text(newValue);
    $(range2).css({
      'width': '128%',
      'margin-left': '-12%'
    });




    // $(range2).parents('.q-box').find('.additional-answers-text').text('Что Вас разочаровало?');
    // $('.additional-answers2').fadeIn();
    let subquestions = document.querySelectorAll('.r2-answers .answer-el');
    let r2Inputs = document.querySelectorAll('.r2-answers .q-2-input');
    // images NOT STANDART size!!!!!
    // $(subquestions[0]).find(".icon-box").css({
    //   'width': '36px',
    //   'height': '36px'
    // });
    // $(subquestions[1]).find(".icon-box").css({
    //   'width': '36px',
    //   'height': '36px'
    // });
    // $(subquestions[2]).find(".icon-box").css({
    //   'width': '36px',
    //   'height': '36px'
    // });
    // $(subquestions[3]).find(".icon-box").css({
    //   'width': ' 37px',
    //   'height': '37px'
    // });
    // $(subquestions[4]).find(".icon-box").css({
    //   'width': '36px',
    //   'height': '36px'
    // });

    // let range2State = range2StateObj.situation1;
    // for (let i = 0; i < subquestions.length; i++) {
    //   let classToRemove = 'changed-icon' + [i];
    //   let classToAdd = 'r2-changed-icon-st1-' + [i];
    //   let classToRemove = 'r2-changed-icon-st2-' + [i];
    //   let classToRemove2 = 'r2-changed-icon-st3-' + [i];
    //   $(subquestions[i]).find(".icon-box").css({
    //     'background-image': `url("${range2State[i].url}")`
    //   });
    //   $(subquestions[i]).find(".answer-txt").text(range2State[i].text);
    //   $(subquestions[i]).find(".icon-box").addClass(classToAdd);
    //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
    //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
    //   r2Inputs[i].value = range2State[i].text;
    // }
  }

  if (newValue == 0) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-50%)');
    $('#points-box2').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
  if (newValue == 1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[1]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-53%)');
    $('#points-box2').css({
      'transform': 'translateX(-5px)',
      'color': '#CD0800'
    });
  }
  if (newValue == 2) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[2]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-55%)');
    $('#points-box2').css({
      'transform': 'translateX(-5px)',
      'color': '#F45800'
    });
  }
  if (newValue == 3) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[3]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-61%)');
    $('#points-box2').css({
      'transform': 'translateX(-7px)',
      'color': '#F45800'
    });
  }
  if (newValue == 4) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[4]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-63%)');
    $('#points-box2').css({
      'transform': 'translateX(-9px)',
      'color': '#FFB800'
    });
  }
  if (newValue == 5) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[5]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-68%)');
    $('#points-box2').css({
      'transform': 'translateX(-9px)',
      'color': '#D7E317'
    });
  }
  if (newValue == 6) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[6]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-71%)');
    $('#points-box2').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 7) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[7]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-72%)');
    $('#points-box2').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 8) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[8]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-79%)');
    $('#points-box2').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 9) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[9]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-80%)');
    $('#points-box2').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 10) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[10]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-86%)');
    $('#points-box2').css({
      'transform': 'translateX(-17px)',
      'color': '#00D086'
    });
    if (surveyWidth > 420) {
      $('#rangeValue2').css('transform', 'translateX(-89%)');
    }
  }
  if (newValue == 0.1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue2').css('transform', 'translateX(-50%)');
    $('#points-box2').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
};

// Initialize setValue onload and oninput
// document.addEventListener("DOMContentLoaded", setValue2);
range2.addEventListener('input', setValue2);


$(range2).on('change', function () {
  rangeChanging = 1;
  let subquestions = document.querySelectorAll('.r2-answers .answer-el');
  let r2Inputs = document.querySelectorAll('.r2-answers .q-2-input');
  $('.additional-answers2').fadeIn();
  $('.q-box-2').fadeIn();

  if (scrollHeightR2 == 0) {
    let haightSum = $('.header').innerHeight() + $('.q-box-0').innerHeight() + $('.q-box-1').innerHeight();
    $('#survey-container').css('min-height', `calc(${haightSum}px + 100vh)`);
  }

  scrollHeightR2 = 1;

  let nextPosition = $('.q-box-2').offset().top;
  $('html, body').animate({
    scrollTop: nextPosition
  }, 500);

  if (rangeChanging === 1) {
    $(this).parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');

    //   $('html, body').animate({
    //     scrollTop: $('#range3').parents('.r2-answers').offset().top - 200
    // }, 1000);

    // Span position and inner value 

    let newValue = Math.round(((range2.value - range2.min) * 10 / (range2.max - range2.min) * 1));
    const newPosition = newValue;
    rangeV2.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box2').text(newValue);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
    let newProperties = url + newMaskProperties;
    $('#tickContainer2').css('-webkit-mask', newProperties);
    $('#tickContainer2').css('-webkit-mask-repeat', 'no-repeat');
    $('#tickContainer2').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $('#points-box2').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

    console.log(newValue)
    $(range2).val(newValue);
    $('#points-box2').css('opacity', '1');
    $(range2).attr('step', '1');
    $(range2).css({
      'width': '128%',
      'margin-left': '-12%'
    });

    let pointMarks = $('#range-wrapp-2 .point-marck');

    if (newValue == 0) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-50%)');
      $('#points-box2').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue == 1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[1]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-53%)');
      $('#points-box2').css({
        'transform': 'translateX(-5px)',
        'color': '#CD0800'
      });
    }
    if (newValue == 2) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[2]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-55%)');
      $('#points-box2').css({
        'transform': 'translateX(-5px)',
        'color': '#F45800'
      });
    }
    if (newValue == 3) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[3]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-61%)');
      $('#points-box2').css({
        'transform': 'translateX(-7px)',
        'color': '#F45800'
      });
    }
    if (newValue == 4) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[4]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-63%)');
      $('#points-box2').css({
        'transform': 'translateX(-9px)',
        'color': '#FFB800'
      });
    }
    if (newValue == 5) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[5]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-68%)');
      $('#points-box2').css({
        'transform': 'translateX(-9px)',
        'color': '#D7E317'
      });
    }
    if (newValue == 6) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[6]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-71%)');
      $('#points-box2').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 7) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[7]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-72%)');
      $('#points-box2').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 8) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[8]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-79%)');
      $('#points-box2').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 9) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[9]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-80%)');
      $('#points-box2').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 10) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[10]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-86%)');
      $('#points-box2').css({
        'transform': 'translateX(-17px)',
        'color': '#00D086'
      });
      if (surveyWidth > 420) {
        $('#rangeValue2').css('transform', 'translateX(-89%)');
      }
    }
    if (newValue == 0.1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue2').css('transform', 'translateX(-50%)');
      $('#points-box2').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue <= 6) {
      console.log('<=6');
      // $(this).parents('.q-box').find('.additional-answers-text').text('Что Вас разочаровало?');
    }
    if (newValue <= 6) {
      console.log('<=6');
      range2Indecator = 0;
      $('.q-2-input').prop('checked', false);
      // $(this).parents('.q-box').find('.additional-answers-text').text('Что Вас разочаровало?');

      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });

      // let range2State = range2StateObj.situation1;
      // for (let i = 0; i < subquestions.length; i++) {
      //   // let classToRemove = 'changed-icon' + [i];
      //   let classToAdd = 'r2-changed-icon-st1-' + [i];
      //   let classToRemove = 'r2-changed-icon-st2-' + [i];
      //   let classToRemove2 = 'r2-changed-icon-st3-' + [i];
      //   $(subquestions[i]).find(".icon-box").css({
      //     'background-image': `url("${range2State[i].url}")`
      //   });
      //   $(subquestions[i]).find(".answer-txt").text(range2State[i].text);
      //   $(subquestions[i]).find(".icon-box").addClass(classToAdd);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
      //   r2Inputs[i].value = range2State[i].text;
      // }
    }
    if (newValue >= 7 && newValue <= 9) {
      console.log('7 - 9');
      range2Indecator = 1;
      // $('.q-2-input').prop('checked', false);
      // $(this).parents('.q-box').find('.additional-answers-text').text('Что необходимо улучшить?');
      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      // let range2State = range2StateObj.situation2;
      // for (let i = 0; i < subquestions.length; i++) {
      //   let classToAdd = 'r2-changed-icon-st2-' + [i];
      //   let classToRemove = 'r2-changed-icon-st1-' + [i];
      //   let classToRemove2 = 'r2-changed-icon-st3-' + [i];
      //   $(subquestions[i]).find(".icon-box").css({
      //     'background-image': `url("${range2State[i].url}")`
      //   });
      //   $(subquestions[i]).find(".answer-txt").text(range2State[i].text);
      //   $(subquestions[i]).find(".icon-box").addClass(classToAdd);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
      //   r2Inputs[i].value = range2State[i].text;
      // }
    }
    if (newValue == 10) {
      console.log('10');
      range2Indecator = 1;
      // $('.q-2-input').prop('checked', false);
      // $(this).parents('.q-box').find('.additional-answers-text').text('Что понравилось больше всего?');
      // images NOT STANDART size!!!!!
      // $(subquestions[0]).find(".icon-box").css({
      //   'width': '36px',
      //   'height': '36px'
      // });
      // $(subquestions[1]).find(".icon-box").css({
      //   'width': '36px',
      //   'height': '36px'
      // });
      // $(subquestions[2]).find(".icon-box").css({
      //   'width': '36px',
      //   'height': '36px'
      // });
      // $(subquestions[3]).find(".icon-box").css({
      //   'width': ' 37px',
      //   'height': '37px'
      // });
      // $(subquestions[4]).find(".icon-box").css({
      //   'width': '36px',
      //   'height': '36px'
      // });
      // let range2State = range2StateObj.situation3;
      // for (let i = 0; i < subquestions.length; i++) {
      //   let classToAdd = 'r2-changed-icon-st3-' + [i];
      //   let classToRemove = 'r2-changed-icon-st1-' + [i];
      //   let classToRemove2 = 'r2-changed-icon-st2-' + [i];
      //   $(subquestions[i]).find(".icon-box").css({
      //     'background-image': `url("${range2State[i].url}")`
      //   });
      //   $(subquestions[i]).find(".answer-txt").text(range2State[i].text);
      //   $(subquestions[i]).find(".icon-box").addClass(classToAdd);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
      //   $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
      //   r2Inputs[i].value = range2State[i].text;
      // }
    }
  }
});




/** third range */


range3StateObj = {
  situation1: [{
    url: './img/range3-icons/find.svg',
    text: 'Сложно найти информацию'
  }, {
    url: './img/range3-icons/speak.svg',
    text: 'Непонятные формулировки'
  }, {
    url: './img/range3-icons/zoom.svg',
    text: 'Есть скрытые условия'
  }],


  situation2: [{
    url: './img/range3-icons/find.svg',
    text: 'Сложно найти информацию'
  }, {
    url: './img/range3-icons/speak.svg',
    text: 'Непонятные формулировки'
  }, {
    url: './img/range3-icons/zoom.svg',
    text: 'Есть скрытые условия'
  }],

  situation3: [{
    url: './img/range3-icons/find.svg',
    text: 'Просто найти информацию'
  }, {
    url: './img/range3-icons/speak.svg',
    text: 'Понятные формулировки'
  }, {
    url: './img/range3-icons/zoom.svg',
    text: 'Нет скрытых условий'
  }],
}



const tickContainer3 = document.querySelector('#range-wrapp-3');
const range3 = document.getElementById('range3');
const rangeV3 = document.getElementById('rangeValue3');
let rangeChanging3 = 0;

const setValue3 = () => {
  // Span position and inner value
  let newValue = Number((range3.value - range3.min) * 10 / (range3.max - range3.min));
  const newPosition = newValue;
  rangeV3.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
  $('#points-box3').text(newValue);

  // Tick curve position
  let newP = (newValue / 10) * 100;
  newP = newP.toString();
  let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
  let newProperties = url + newMaskProperties;
  $('#tickContainer3').css('-webkit-mask', newProperties);
  $('#tickContainer3').css('-webkit-mask-repeat', 'no-repeat');
  $('#tickContainer3').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
  $('#points-box3').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  let pointMarks = $('#range-wrapp-3 .point-marck');

  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    range3Indecator = 0;
    // $('.small-number').text('6');
    // $(".marker-container .marker:last-child").show();
    // $('.marker').css('width', '16%');
    // $('#range3').change();
    $('#tickContainer3').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $(range3).attr('step', '1');
    // $('.q-box-3').fadeIn();
    newValue = 0;
    $('#points-box3').css('opacity', '1');
    $('#points-box3').text(newValue);
    $(range3).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    let subquestions = document.querySelectorAll('.r3-answers .answer-el');
    let rInputs = document.querySelectorAll('.r3-answers .q-3-input');
    // $('.additional-answers3').fadeIn();
    $(range3).parents('.q-box').find('.additional-answers-text').text('Что Вас разочаровало?');

    // images NOT STANDART size!!!!!
    $(subquestions[0]).find(".icon-box").css({
      'width': '36px',
      'height': '36px'
    });
    $(subquestions[1]).find(".icon-box").css({
      'width': '36px',
      'height': '36px'
    });
    $(subquestions[2]).find(".icon-box").css({
      'width': '36px',
      'height': '36px'
    });
    $(subquestions[3]).find(".icon-box").css({
      'width': ' 37px',
      'height': '37px'
    });
    $(subquestions[4]).find(".icon-box").css({
      'width': '36px',
      'height': '36px'
    });

    let rangeState = range3StateObj.situation1;
    for (let i = 0; i < subquestions.length; i++) {
      // let classToRemove = 'changed-icon' + [i];
      let classToAdd = 'r3-changed-icon-st1-' + [i];
      let classToRemove = 'r3-changed-icon-st2-' + [i];
      let classToRemove2 = 'r3-changed-icon-st3-' + [i];
      $(subquestions[i]).find(".icon-box").css({
        'background-image': `url("${rangeState[i].url}")`
      });
      $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
      $(subquestions[i]).find(".icon-box").addClass(classToAdd);
      $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
      $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
      rInputs[i].value = rangeState[i].text;
    }


  }

  if (newValue == 0) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-50%)');
    $('#points-box3').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
  if (newValue == 1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[1]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-53%)');
    $('#points-box3').css({
      'transform': 'translateX(-5px)',
      'color': '#CD0800'
    });
  }
  if (newValue == 2) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[2]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-55%)');
    $('#points-box3').css({
      'transform': 'translateX(-5px)',
      'color': '#F45800'
    });
  }
  if (newValue == 3) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[3]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-61%)');
    $('#points-box3').css({
      'transform': 'translateX(-7px)',
      'color': '#F45800'
    });
  }
  if (newValue == 4) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[4]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-63%)');
    $('#points-box3').css({
      'transform': 'translateX(-9px)',
      'color': '#FFB800'
    });
  }
  if (newValue == 5) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[5]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-68%)');
    $('#points-box3').css({
      'transform': 'translateX(-9px)',
      'color': '#D7E317'
    });
  }
  if (newValue == 6) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[6]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-71%)');
    $('#points-box3').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 7) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[7]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-72%)');
    $('#points-box3').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 8) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[8]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-79%)');
    $('#points-box3').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 9) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[9]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-80%)');
    $('#points-box3').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 10) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[10]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-86%)');
    $('#points-box3').css({
      'transform': 'translateX(-17px)',
      'color': '#00D086'
    });
    if (surveyWidth > 420) {
      $('#rangeValue3').css('transform', 'translateX(-89%)');
    }
  }
  if (newValue == 0.1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue3').css('transform', 'translateX(-50%)');
    $('#points-box3').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
};

// Initialize setValue onload and oninput
// document.addEventListener("DOMContentLoaded", setValue3);
range3.addEventListener('input', setValue3);


$(range3).on('change', function () {
  rangeChanging = 1;
  let subquestions = document.querySelectorAll('.r3-answers .answer-el');
  let rInputs = document.querySelectorAll('.r3-answers .q-3-input');
  $('.additional-answers3').fadeIn();
  let pointMarks = $('#range-wrapp-3 .point-marck');
  // $('.q-box-3').fadeIn();
  // $('html, body').animate({
  //   scrollTop: $(".additional-answers3").offset().top
  // });
  if (rangeChanging === 1) {
    $(this).parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    // Span position and inner value 

    let newValue = Math.round(((range3.value - range3.min) * 10 / (range3.max - range3.min) * 1));
    const newPosition = newValue;
    rangeV3.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box3').text(newValue);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
    let newProperties = url + newMaskProperties;
    $('#tickContainer3').css('-webkit-mask', newProperties);
    $('#tickContainer3').css('-webkit-mask-repeat', 'no-repeat');
    $('#tickContainer3').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $('#points-box3').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

    console.log(newValue)
    $(range3).val(newValue);
    $('#points-box3').css('opacity', '1');
    $(range3).attr('step', '1');
    $(range3).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    if (newValue == 0) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-50%)');
      $('#points-box3').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue == 1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[1]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-53%)');
      $('#points-box3').css({
        'transform': 'translateX(-5px)',
        'color': '#CD0800'
      });
    }
    if (newValue == 2) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[2]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-55%)');
      $('#points-box3').css({
        'transform': 'translateX(-5px)',
        'color': '#F45800'
      });
    }
    if (newValue == 3) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[3]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-61%)');
      $('#points-box3').css({
        'transform': 'translateX(-7px)',
        'color': '#F45800'
      });
    }
    if (newValue == 4) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[4]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-63%)');
      $('#points-box3').css({
        'transform': 'translateX(-9px)',
        'color': '#FFB800'
      });
    }
    if (newValue == 5) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[5]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-68%)');
      $('#points-box3').css({
        'transform': 'translateX(-9px)',
        'color': '#D7E317'
      });
    }
    if (newValue == 6) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[6]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-71%)');
      $('#points-box3').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 7) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[7]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-72%)');
      $('#points-box3').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 8) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[8]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-79%)');
      $('#points-box3').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 9) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[9]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-80%)');
      $('#points-box3').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 10) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[10]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-86%)');
      $('#points-box3').css({
        'transform': 'translateX(-17px)',
        'color': '#00D086'
      });
      if (surveyWidth > 420) {
        $('#rangeValue3').css('transform', 'translateX(-89%)');
      }
    }
    if (newValue == 0.1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue3').css('transform', 'translateX(-50%)');
      $('#points-box3').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue <= 6) {
      console.log('<=6');
      range3Indecator = 0;
      $('.q-3-input').prop('checked', false);
      $(this).parents('.q-box').find('.additional-answers-text').text('Что было не понятно?');

      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });

      let rangeState = range3StateObj.situation1;
      for (let i = 0; i < subquestions.length; i++) {
        // let classToRemove = 'changed-icon' + [i];
        let classToAdd = 'r3-changed-icon-st1-' + [i];
        let classToRemove = 'r3-changed-icon-st2-' + [i];
        let classToRemove2 = 'r3-changed-icon-st3-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }
    if (newValue >= 7 && newValue <= 9) {
      console.log('7 - 9');
      range3Indecator = 1;
      $('.q-3-input').prop('checked', false);
      $(this).parents('.q-box').find('.additional-answers-text').text('Что было не понятно?');
      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      let rangeState = range3StateObj.situation2;
      for (let i = 0; i < subquestions.length; i++) {
        let classToAdd = 'r3-changed-icon-st2-' + [i];
        let classToRemove = 'r3-changed-icon-st1-' + [i];
        let classToRemove2 = 'r3-changed-icon-st3-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }
    if (newValue == 10) {
      console.log('10');
      $('.q-3-input').prop('checked', false);
      range3Indecator = 1;
      $(this).parents('.q-box').find('.additional-answers-text').text('Что Вам понравилось?');
      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      let rangeState = range3StateObj.situation3;
      for (let i = 0; i < subquestions.length; i++) {
        let classToAdd = 'r3-changed-icon-st3-' + [i];
        let classToRemove = 'r3-changed-icon-st1-' + [i];
        let classToRemove2 = 'r3-changed-icon-st2-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }
  }
});





/** fourth range */


range4StateObj = {
  situation1: [{
    url: './img/range4-icons/new-icons/accounting.svg',
    text: 'Реквизиты'
  }, {
    url: './img/range4-icons/new-icons/send.svg',
    text: 'Способы пополнения/снятия вклада'
  }, {
    url: './img/range4-icons/new-icons/cashback.svg',
    text: 'Процентная ставка'
  }, {
    url: './img/range4-icons/new-icons/rate.svg',
    text: 'Как начисляются проценты/сумма процентов'
  }, {
    url: './img/range4-icons/new-icons/hand.svg',
    text: 'Дата выплаты процентов'
  }, {
    url: './img/range4-icons/new-icons/conditions.svg',
    text: 'Условия пролонгация и закрытия вклада'
  }],


  situation2: [{
    url: './img/range4-icons/new-icons/accounting.svg',
    text: 'Реквизиты'
  }, {
    url: './img/range4-icons/new-icons/send.svg',
    text: 'Способы пополнения/снятия вклада'
  }, {
    url: './img/range4-icons/new-icons/cashback.svg',
    text: 'Процентная ставка'
  }, {
    url: './img/range4-icons/new-icons/rate.svg',
    text: 'Как начисляются проценты/сумма процентов'
  }, {
    url: './img/range4-icons/new-icons/hand.svg',
    text: 'Дата выплаты процентов'
  }, {
    url: './img/range4-icons/new-icons/conditions.svg',
    text: 'Условия пролонгация и закрытия вклада'
  }],

  situation3: [{
    url: './img/range4-icons/new-icons/accounting.svg',
    text: 'Реквизиты'
  }, {
    url: './img/range4-icons/new-icons/send.svg',
    text: 'Способы пополнения/снятия вклада'
  }, {
    url: './img/range4-icons/new-icons/cashback.svg',
    text: 'Процентная ставка'
  }, {
    url: './img/range4-icons/new-icons/rate.svg',
    text: 'Как начисляются проценты/сумма процентов'
  }, {
    url: './img/range4-icons/new-icons/hand.svg',
    text: 'Дата выплаты процентов'
  }, {
    url: './img/range4-icons/new-icons/conditions.svg',
    text: 'Условия пролонгация и закрытия вклада'
  }],
}



const tickContainer4 = document.querySelector('#range-wrapp-4');
const range4 = document.getElementById('range4');
const rangeV4 = document.getElementById('rangeValue4');
let rangeChanging4 = 0;

const setValue4 = () => {
  // Span position and inner value
  let newValue = Number((range4.value - range4.min) * 10 / (range4.max - range4.min));
  const newPosition = newValue;
  rangeV4.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
  $('#points-box4').text(newValue);

  // Tick curve position
  let newP = (newValue / 10) * 100;
  newP = newP.toString();
  let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
  let newProperties = url + newMaskProperties;
  $('#tickContainer4').css('-webkit-mask', newProperties);
  $('#tickContainer4').css('-webkit-mask-repeat', 'no-repeat');
  $('#tickContainer4').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
  $('#points-box4').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  let pointMarks = $('#range-wrapp-4 .point-marck');

  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    range4Indecator = 0;
    // $('.small-number').text('6');
    // $(".marker-container .marker:last-child").show();
    // $('.marker').css('width', '16%');
    // $('.q-box-5').show();
    // $('#range4').change();
    $('#tickContainer4').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $(range4).attr('step', '1');
    $('.q-box-4').fadeIn();
    newValue = 0;
    $('#points-box4').css('opacity', '1');
    $('#points-box4').text(newValue);
    $(range4).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    let subquestions = document.querySelectorAll('.r4-answers .answer-el');
    let rInputs = document.querySelectorAll('.r4-answers .q-4-input');
    $('.additional-answers4').fadeIn();
    $(range4).parents('.q-box').find('.additional-answers-text').text('Что Вас разочаровало?');

    // images NOT STANDART size!!!!!
    $(subquestions[0]).find(".icon-box").css({
      'width': '28px',
      'height': '37px',
      'background-size': 'contain'
    });
    $(subquestions[1]).find(".icon-box").css({
      'width': '40px',
      'height': '40px'
    });
    $(subquestions[2]).find(".icon-box").css({
      'width': '36px',
      'height': '36px',
      'background-size': 'cover'
    });
    $(subquestions[3]).find(".icon-box").css({
      'width': ' 37px',
      'height': '37px'
    });
    $(subquestions[4]).find(".icon-box").css({
      'width': '36px',
      'height': '36px'
    });
    $(subquestions[5]).find(".icon-box").css({
      'width': '32px',
      'height': '32px'
    });

    let rangeState = range4StateObj.situation1;
    for (let i = 0; i < subquestions.length; i++) {
      // let classToRemove = 'changed-icon' + [i];
      let classToAdd = 'r4-changed-icon-st1-' + [i];
      let classToRemove = 'r4-changed-icon-st2-' + [i];
      let classToRemove2 = 'r4-changed-icon-st3-' + [i];
      $(subquestions[i]).find(".icon-box").css({
        'background-image': `url("${rangeState[i].url}")`
      });
      $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
      $(subquestions[i]).find(".icon-box").addClass(classToAdd);
      $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
      $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
      rInputs[i].value = rangeState[i].text;
    }
  }

  if (newValue == 0) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-50%)');
    $('#points-box4').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
  if (newValue == 1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[1]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-53%)');
    $('#points-box4').css({
      'transform': 'translateX(-5px)',
      'color': '#CD0800'
    });
  }
  if (newValue == 2) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[2]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-55%)');
    $('#points-box4').css({
      'transform': 'translateX(-5px)',
      'color': '#F45800'
    });
  }
  if (newValue == 3) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[3]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-61%)');
    $('#points-box4').css({
      'transform': 'translateX(-7px)',
      'color': '#F45800'
    });
  }
  if (newValue == 4) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[4]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-63%)');
    $('#points-box4').css({
      'transform': 'translateX(-9px)',
      'color': '#FFB800'
    });
  }
  if (newValue == 5) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[5]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-68%)');
    $('#points-box4').css({
      'transform': 'translateX(-9px)',
      'color': '#D7E317'
    });
  }
  if (newValue == 6) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[6]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-71%)');
    $('#points-box4').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 7) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[7]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-72%)');
    $('#points-box4').css({
      'transform': 'translateX(-10px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 8) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[8]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-79%)');
    $('#points-box4').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 9) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[9]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-80%)');
    $('#points-box4').css({
      'transform': 'translateX(-11px)',
      'color': '#00D086'
    });
  }
  if (newValue == 10) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[10]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-84%)');
    $('#points-box4').css({
      'transform': 'translateX(-17px)',
      'color': '#00D086'
    });
    if (surveyWidth > 420) {
      $('#rangeValue4').css('transform', 'translateX(-89%)');
    }
  }
  if (newValue == 0.1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue4').css('transform', 'translateX(-50%)');
    $('#points-box4').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
};

// Initialize setValue onload and oninput
// document.addEventListener("DOMContentLoaded", setValue4);
range4.addEventListener('input', setValue4);


$(range4).on('change', function () {
  rangeChanging = 1;
  lastRangChanged = 1;
  let subquestions = document.querySelectorAll('.r4-answers .answer-el');
  let rInputs = document.querySelectorAll('.r4-answers .q-4-input');
  $('.additional-answers4').fadeIn();
  $('.q-box-4').fadeIn();
  $('.btn-wrapper').css('display', 'flex');
  // $('html, body').animate({
  //   scrollTop: $(".additional-answers4").offset().top
  // });
  let pointMarks = $('#range-wrapp-4 .point-marck');
  if (rangeChanging === 1) {
    $(this).parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    // Span position and inner value 
    // $('.survey-container').css('padding-bottom', '50px');
    let newValue = Math.round(((range4.value - range4.min) * 10 / (range4.max - range4.min) * 1));
    const newPosition = newValue;
    rangeV4.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box4').text(newValue);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
    let newProperties = url + newMaskProperties;
    $('#tickContainer4').css('-webkit-mask', newProperties);
    $('#tickContainer4').css('-webkit-mask-repeat', 'no-repeat');
    $('#tickContainer4').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $('#points-box4').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

    console.log(newValue)
    $(range4).val(newValue);
    $('#points-box4').css('opacity', '1');
    $(range4).attr('step', '1');
    $(range4).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    if (newValue == 0) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-50%)');
      $('#points-box4').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue == 1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[1]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-53%)');
      $('#points-box4').css({
        'transform': 'translateX(-5px)',
        'color': '#CD0800'
      });
    }
    if (newValue == 2) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[2]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-55%)');
      $('#points-box4').css({
        'transform': 'translateX(-5px)',
        'color': '#F45800'
      });
    }
    if (newValue == 3) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[3]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-61%)');
      $('#points-box4').css({
        'transform': 'translateX(-7px)',
        'color': '#F45800'
      });
    }
    if (newValue == 4) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[4]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-63%)');
      $('#points-box4').css({
        'transform': 'translateX(-9px)',
        'color': '#FFB800'
      });
    }
    if (newValue == 5) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[5]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-68%)');
      $('#points-box4').css({
        'transform': 'translateX(-9px)',
        'color': '#D7E317'
      });
    }
    if (newValue == 6) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[6]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-71%)');
      $('#points-box4').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 7) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[7]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-72%)');
      $('#points-box4').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 8) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[8]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-79%)');
      $('#points-box4').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 9) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[9]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-80%)');
      $('#points-box4').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 10) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[10]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-84%)');
      $('#points-box4').css({
        'transform': 'translateX(-17px)',
        'color': '#00D086'
      });
      if (surveyWidth > 420) {
        $('#rangeValue4').css('transform', 'translateX(-89%)');
      }
    }
    if (newValue == 0.1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue4').css('transform', 'translateX(-50%)');
      $('#points-box4').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue <= 6) {
      console.log('<=6');
      range4Indecator = 0;
      $('.q-4-input').prop('checked', false);
      $(this).parents('.q-box').find('.additional-answers-text').text('Остались вопросы по:');

      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '28px',
        'height': '37px',
        'background-size': 'contain'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '40px',
        'height': '40px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px',
        'background-size': 'cover'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[5]).find(".icon-box").css({
        'width': '32px',
        'height': '32px'
      });

      let rangeState = range4StateObj.situation1;
      for (let i = 0; i < subquestions.length; i++) {
        // let classToRemove = 'changed-icon' + [i];
        let classToAdd = 'r4-changed-icon-st1-' + [i];
        let classToRemove = 'r4-changed-icon-st2-' + [i];
        let classToRemove2 = 'r4-changed-icon-st3-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }


    if (newValue >= 7 && newValue <= 9) {
      console.log('7 - 9');
      range4Indecator = 1;
      $('.q-4-input').prop('checked', false);
      $(this).parents('.q-box').find('.additional-answers-text').text('Остались вопросы по:');
      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '28px',
        'height': '37px',
        'background-size': 'contain'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '40px',
        'height': '40px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px',
        'background-size': 'cover'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[5]).find(".icon-box").css({
        'width': '32px',
        'height': '32px'
      });
      let rangeState = range4StateObj.situation2;
      for (let i = 0; i < subquestions.length; i++) {
        let classToAdd = 'r4-changed-icon-st2-' + [i];
        let classToRemove = 'r4-changed-icon-st1-' + [i];
        let classToRemove2 = 'r4-changed-icon-st3-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }
    if (newValue == 10) {
      console.log('10');
      range4Indecator = 1;
      $('.q-4-input').prop('checked', false);
      $(this).parents('.q-box').find('.additional-answers-text').text('Получил исчерпывающий объем информации по условиям:');
      // images NOT STANDART size!!!!!
      $(subquestions[0]).find(".icon-box").css({
        'width': '28px',
        'height': '37px',
        'background-size': 'contain'
      });
      $(subquestions[1]).find(".icon-box").css({
        'width': '40px',
        'height': '40px'
      });
      $(subquestions[2]).find(".icon-box").css({
        'width': '36px',
        'height': '36px',
        'background-size': 'cover'
      });
      $(subquestions[3]).find(".icon-box").css({
        'width': ' 37px',
        'height': '37px'
      });
      $(subquestions[4]).find(".icon-box").css({
        'width': '36px',
        'height': '36px'
      });
      $(subquestions[5]).find(".icon-box").css({
        'width': '32px',
        'height': '32px'
      });
      let rangeState = range4StateObj.situation3;
      for (let i = 0; i < subquestions.length; i++) {
        let classToAdd = 'r4-changed-icon-st3-' + [i];
        let classToRemove = 'r4-changed-icon-st1-' + [i];
        let classToRemove2 = 'r4-changed-icon-st2-' + [i];
        $(subquestions[i]).find(".icon-box").css({
          'background-image': `url("${rangeState[i].url}")`
        });
        $(subquestions[i]).find(".answer-txt").text(rangeState[i].text);
        $(subquestions[i]).find(".icon-box").addClass(classToAdd);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove);
        $(subquestions[i]).find(".icon-box").removeClass(classToRemove2);
        rInputs[i].value = rangeState[i].text;
      }
    }
  }
  // if (range1Indecator == 0 || range2Indecator == 0 || range3Indecator == 0 || range4Indecator == 0) {
  //   $('.q-box-5').show();
  // } else {
  //   $('.q-box-5').hide();
  // }
});