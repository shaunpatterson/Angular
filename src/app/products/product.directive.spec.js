/* jshint unused:false, -W117, -W030 */
(function() {
    'use strict';
    
    describe('adProduct directive', function() {
        var el;
        var product; 
        var scope;
            
        

        beforeEach(function() { 
            module('angularDeveloper');
        });

        beforeEach(inject(function($compile, $rootScope) {
            product = getProduct();

            el = angular.element('<ad-product product="product"/>');
            
            scope = $rootScope;
            scope.product = product;
            $compile(el)(scope);

            scope.$digest();
        }));

        it('should have a product', function() {
            expect(el.isolateScope().vm.product.id).toBeTruthy();
        });

        describe('after link', function() {
            var imgElement;
            var displayNameElement;
            var styleElement;
            var priceSymbolElement;
            var priceDollarsElement;
            var priceCentsElement;
            var colorElement;
            var sizeElement;
            var qtyElement;
            var removeButton;
            

            beforeEach(function() {
                // This would be a lot easier with jQuery but not sure if that's allowed in the rules 
                var spans = el.find('span');

                displayNameElement = angular.element(spans[0]);
                styleElement = angular.element(spans[1]);
                priceDollarsElement = angular.element(spans[2]);
                priceCentsElement = angular.element(spans[3]);
                colorElement = angular.element(spans[5]);
                sizeElement = angular.element(spans[7]);
                qtyElement = angular.element(spans[9]);

                imgElement = angular.element(el.find('img')[0]);

            });

        
            it('should render the correct values', function() {
                expect(displayNameElement.text()).toEqual(product.displayName);
                expect(styleElement.text()).toEqual("STYLE: " + product.styleNumber);
                expect(priceDollarsElement.text()).toEqual("99");
                expect(priceCentsElement.text()).toEqual(".90");
                expect(colorElement.text()).toEqual(''+product.color);
                expect(sizeElement.text()).toEqual(''+product.size);
                expect(qtyElement.text()).toEqual(String(product.quantity));
            });

        });

        function getProduct() {
            return { "id": "55789b11a0ebba00173c8b1f", "productId": "FP-22888010-000", "skuId": "22889638", "displayName": "FP Pull On Flares", "image": "http://img2.fpassets.com/is/image/FreePeople/22888010_040_a", "quantity": 2, "totalPrice": 99.9, "color": "reef wash", "size": "29", "styleNumber": "22888010" };
        }

    });
})();
