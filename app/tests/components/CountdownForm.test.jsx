var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var testUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
  it('should exist',()=>{
    expect(CountdownForm).toExist();
  });
  it('it should call onSetCountdown if valid input',()=>{
    var spy = expect.createSpy();
    var countdownForm = testUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '109';
    testUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });
  it('it should not call onSetCountdown if not valid input',()=>{
    var spy = expect.createSpy();
    var countdownForm = testUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = ' ';
    testUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
