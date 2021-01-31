(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"], {
    /***/
    "M95H":
    /*!**********************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
      \**********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function M95H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          this.tracking = false;
          this.buttonText = 'Start';
          this.workedToday = 'inka start cheyneledu';
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onToggle",
          value: function onToggle() {
            this.tracking = !this.tracking;
            this.buttonText = this.tracking ? 'Pause' : 'Start';
            this.processTracking();
          }
        }, {
          key: "processTracking",
          value: function processTracking() {
            var _this = this;

            if (this.tracking) {
              this.interval = setInterval(function () {
                _this.seconds++;
                _this.minutes = Math.floor(_this.seconds / 60);
                _this.hours = Math.floor(_this.minutes / 60);
                _this.workedToday = _this.minutes < 1 ? 'Less than a minute' : _this.minutes >= 1 && _this.minutes < 60 ? _this.minutes + ' minutes' : _this.minutes >= 60 && _this.hours < 24 ? _this.hours + ' hours' : 'days';
              }, 1000);
            } else {
              if (this.interval) {
                clearInterval(this.interval);
              }
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 11,
        vars: 6,
        consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "timer"], [1, "button"], [1, "btn", 3, "ngClass", "click"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trackify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_9_listener() {
              return ctx.onToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Worked Today : ", ctx.workedToday, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.hours, " : ", ctx.minutes, " : ", ctx.seconds, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tracking ? "btn-secondary" : "btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.timer[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnRpbWVye1xuICAgIGZvbnQtc2l6ZTogNTBweFxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XoyV":
    /*!*******************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function XoyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      "M95H");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_gpt3_gpt3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! .././components/gpt3/gpt3.component */
      "xBo1");

      var routes = [// { path: '', component: DashboardComponent},
      {
        path: '',
        component: _components_gpt3_gpt3_component__WEBPACK_IMPORTED_MODULE_4__["Gpt3Component"]
      }];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _components_gpt3_gpt3_component__WEBPACK_IMPORTED_MODULE_4__["Gpt3Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _components_gpt3_gpt3_component__WEBPACK_IMPORTED_MODULE_4__["Gpt3Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xBo1":
    /*!***********************************************************!*\
      !*** ./src/app/modules/components/gpt3/gpt3.component.ts ***!
      \***********************************************************/

    /*! exports provided: Gpt3Component */

    /***/
    function xBo1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Gpt3Component", function () {
        return Gpt3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Gpt3Component = /*#__PURE__*/function () {
        function Gpt3Component(http, cdr) {
          _classCallCheck(this, Gpt3Component);

          this.http = http;
          this.cdr = cdr;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.key = 'sk-gnpHgNlj1nyLOIPUJShUjPkllzh19Tktx3e6eHpV';
          this.finalOptions = {
            // prompt: trainData,
            engine: 'davinci',
            key: this.key,
            temperature: 0.9,
            topP: 1,
            bestOf: 1,
            maxTokens: 100,
            echo: false,
            stream: false,
            frequencyPenalty: 1,
            presencePenalty: 1,
            stop: '↵↵'
          };
          this.apiCallSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();

          this.validateInput = function (inputText) {
            var isValid = false;
            isValid = inputText && inputText.length >= 15 ? true : false;
            return isValid;
          };
        }

        _createClass(Gpt3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1500)).subscribe(function (event) {
              _this2.doAction(event);
            });
          } // onKeyUp(event:any){
          //   console.log(event);
          // }

        }, {
          key: "onKeyUp",
          value: function onKeyUp(event) {
            if (this.apiCallSubscribe) {
              this.apiCallSubscribe.unsubscribe();
            }

            this.subject.next(event);
          }
        }, {
          key: "_construct_parameter",
          value: function _construct_parameter(name, value) {
            return typeof value === 'undefined' || value === null ? null : _defineProperty({}, name, value);
          }
        }, {
          key: "_safe_cast",
          value: function _safe_cast(number) {
            // number = number.toString();
            return isNaN(Number(number)) ? null : Number(number);
          }
        }, {
          key: "doAction",
          value: function doAction(event) {
            var _this3 = this;

            if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) return;
            var element = document.getElementById('aa');
            var maxSize = 20;
            var childNodes = element.childNodes;
            console.log('element ==> ', element.innerText);
            var inputText = element.innerText;
            inputText = inputText.trim();
            var isValid = this.validateInput(inputText);

            if (isValid) {
              console.log('valid inputText');
              var url = "https://api.openai.com/v1/engines/".concat(this.finalOptions.engine, "/completions");
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': "Bearer ".concat(this.finalOptions.key),
                'Content-Type': 'application/json'
              });
              var opts = Object.assign({}, this.finalOptions);
              var data = Object.assign({}, this._construct_parameter("prompt", inputText), this._construct_parameter("stream", opts.stream), this._construct_parameter("stop", opts.stop), this._construct_parameter("max_tokens", this._safe_cast(opts.maxTokens)), this._construct_parameter("temperature", this._safe_cast(opts.temperature)), this._construct_parameter("top_p", this._safe_cast(opts.topP)), this._construct_parameter("presence_penalty", this._safe_cast(opts.presencePenalty)), this._construct_parameter("frequency_penalty", this._safe_cast(opts.frequencyPenalty)), this._construct_parameter("best_of", this._safe_cast(opts.bestOf)), this._construct_parameter("n", this._safe_cast(opts.n)), this._construct_parameter("logprobs", this._safe_cast(opts.logprobs)), this._construct_parameter("echo", opts.echo)); // data = JSON.parse(data)

              if (this.apiCallSubscribe) {
                this.apiCallSubscribe.unsubscribe();
              }

              this.apiCallSubscribe = this.http.post(url, data, {
                headers: headers
              }).subscribe(function (response) {
                console.log('response', response);

                if (response && response.choices) {
                  var resultText = '';
                  response.choices.forEach(function (e) {
                    resultText += e.text;
                  });
                  element.innerText = inputText + resultText;

                  _this3.cdr.detectChanges();
                }
              });
            }
          }
        }, {
          key: "alignElement",
          value: function alignElement(element, event) {
            var childNodes = element.childNodes;
            var size = childNodes.length;

            for (var i = 0; i < size; i++) {
              if (childNodes[i].nodeName == 'DIV') {
                var text = childNodes[i].nodeValue;
                var size1 = text.length;
                var content = '';

                for (var _i = 0; _i < size1; _i++) {
                  if (_i < 20) {
                    if (_i == 0) {
                      content = content + "<span id=".concat(_i, ">") + 'ENTER' + "</span>";
                    } else {
                      content = content + "<span id=".concat(_i, ">") + text[_i] + "</span>";
                    }
                  } else {
                    content = content + "<span id=".concat(_i, " style=\"color:red;\">") + text[_i] + "</span>";
                  }
                }

                element.innerHTML = content;
              } else {
                var _text = childNodes[i].nodeValue;

                var _size = _text && _text.length || 0;

                var _content = '';

                for (var _i2 = 0; _i2 < _size; _i2++) {
                  if (_i2 < 20) {
                    _content = _content + "<span id=".concat(_i2, ">") + _text[_i2] + "</span>";
                  } else {
                    _content = _content + "<span id=".concat(_i2, " style=\"color:red;\">") + _text[_i2] + "</span>";
                  }
                }

                element.innerHTML = _content;
              }

              return element;
            }
          } // let text = element.innerText;
          // let size = text.length;
          // let content = '';
          // for(let i=0;i<size;i++) {   
          //   if(i < 20) {
          //     content = content + `<span id=${i}>`+text[i]+`</span>`;
          //   } else {
          //   content = content + `<span id=${i} style="color:red;">`+text[i]+`</span>`;
          //   } 
          // }
          // element.innerHTML = content;
          // return element;
          // }

        }, {
          key: "redSpaces",
          value: function redSpaces(element, event) {
            var childNodes = element.childNodes;
            var size = childNodes.length;

            for (var i = 0; i < size; i++) {
              if (childNodes[i].innerHTML == '&nbsp;' || childNodes[i].innerHTML == ' ') {
                if (i == 0 && childNodes[i + 1] && (childNodes[i + 1].innerHTML == '&nbsp;' || childNodes[i + 1].innerHTML == ' ')) {
                  childNodes[i].classList.add("highlight");
                  childNodes[i + 1].classList.add("highlight");
                } else {
                  if (childNodes[i - 1] && (childNodes[i - 1].innerHTML == '&nbsp;' || childNodes[i - 1].innerHTML == ' ') && (childNodes[i].innerHTML == '&nbsp;' || childNodes[i].innerHTML == ' ')) {
                    childNodes[i].classList.add("highlight");
                    childNodes[i - 1].classList.add("highlight");
                  }

                  if (childNodes[i + 1] && (childNodes[i + 1].innerHTML == '&nbsp;' || childNodes[i + 1].innerHTML == ' ') && (childNodes[i].innerHTML == '&nbsp;' || childNodes[i].innerHTML == ' ')) {
                    childNodes[i + 1].classList.add("highlight");

                    if (!childNodes[i].classList.contains('highlight')) {
                      childNodes[i].classList.add("highlight");
                    }
                  }
                }
              }
            }
          }
        }]);

        return Gpt3Component;
      }();

      Gpt3Component.ɵfac = function Gpt3Component_Factory(t) {
        return new (t || Gpt3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      Gpt3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Gpt3Component,
        selectors: [["app-gpt3"]],
        decls: 1,
        vars: 0,
        consts: [["contenteditable", "true", "id", "aa", 1, "editable", 3, "keyup"]],
        template: function Gpt3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Gpt3Component_Template_div_keyup_0_listener($event) {
              return ctx.onKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".editable[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: 100px;\n  border: 1px solid blue;\n  resize: vertical;\n  overflow: auto;\n  width: 600px;\n  padding: 5px;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  border-bottom: 4px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dwdDMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNHO0VBQ0MsNEJBQUE7QUFFSiIsImZpbGUiOiJncHQzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRhYmxle1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgcGFkZGluZzo1cHhcbiAgIH1cbiAgIC5oaWdobGlnaHR7XG4gICAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgcmVkO1xuICAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Gpt3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gpt3',
            templateUrl: './gpt3.component.html',
            styleUrls: ['./gpt3.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-dashboard-dashboard-module-es5.js.map