(function() {
    'use strict';

    describe('ProductsController', function(){
        var controller;
        var httpMock;
        var products = getMockProducts();

        beforeEach(function() {
            bard.appModule('angularDeveloper');
            bard.inject('$controller', '$log', '$q', 'ProductsService', '$rootScope', '$httpBackend');
        });

        beforeEach(function() {
            //sinon.stub(ProductsService, 'getProducts').returns($q.when(products));
            controller = $controller('ProductsController');
            
            httpMock = $httpBackend;
            httpMock.expectGET('/data/products.json').respond(products);
            
            $rootScope.$apply();
        });
        
        
        afterEach(function() {
            httpMock.verifyNoOutstandingRequest();
        });

        bard.verifyNoOutstandingHttpRequests();

        describe("Products controller", function() {

            it('should be created successfully', function() {
                expect(controller).toBeDefined();
                httpMock.flush();
            });

            describe("after activate", function() {
                it('should return search results', function() {
                    httpMock.flush();
                    expect(angular.isArray(controller.products)).toBeTruthy();
                    expect(controller.products.length === 19).toBeTruthy();
                });

                it('should remove result', function() {
                    httpMock.flush();
                    controller.removeProduct("55789b11a0ebba00173c8b1f");
                    expect(controller.products.length === 18).toBeTruthy();
                });
            });

        });

    });

    function getMockProducts() {
        console.info("Getting mocked products");
        return { 
            products: [{ "id": "55789b11a0ebba00173c8b1f", "productId": "FP-22888010-000", "skuId": "22889638", "displayName": "FP Pull On Flares", "image": "http://img2.fpassets.com/is/image/FreePeople/22888010_040_a", "quantity": 2, "totalPrice": 99.9, "color": "reef wash", "size": "29", "styleNumber": "22888010" }, { "id": "55789b10a0ebba001c573bf3", "productId": "FP-33792201-000", "skuId": "33792425", "displayName": "Headed Home Boot", "image": "http://img2.fpassets.com/is/image/FreePeople/33792201_030_a", "quantity": 2, "totalPrice": 776, "color": "green", "size": "6.5", "styleNumber": "33792201" }, { "id": "55789b1059c84b001f0f03be", "productId": "FP-32065690-000", "skuId": "33506296", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_031_a", "quantity": 3, "totalPrice": 174, "color": "mapleleaf", "size": "xs", "styleNumber": "32065690" }, { "id": "55789b1059c84b0018b45a74", "productId": "FP-33792201-000", "skuId": "33792375", "displayName": "Headed Home Boot", "image": "http://img2.fpassets.com/is/image/FreePeople/33792201_030_a", "quantity": 2, "totalPrice": 776, "color": "green", "size": "6", "styleNumber": "33792201" }, { "id": "55789b10a0ebba001bfbe88b", "productId": "FP-26097428-000", "skuId": "26097428", "displayName": "FP One Quilted Dog Bed", "image": "http://img2.fpassets.com/is/image/FreePeople/26097428_000_a", "quantity": 2, "totalPrice": 196, "color": "multi", "size": "s", "styleNumber": "26097428" }, { "id": "55789b1059c84b0018b45a73", "productId": "FP-35201482-000", "skuId": "35201524", "displayName": "Sweetheart Shimmer Undie", "image": "http://img2.fpassets.com/is/image/FreePeople/35201482_060_a", "quantity": 3, "totalPrice": 54, "color": "sweetheart shimmer", "size": "m", "styleNumber": "35201482" }, { "id": "55789b10a0ebba001a6b7bd0", "productId": "FP-35201482-000", "skuId": "35201516", "displayName": "Sweetheart Shimmer Undie", "image": "http://img2.fpassets.com/is/image/FreePeople/35201482_060_a", "quantity": 2, "totalPrice": 36, "color": "sweetheart shimmer", "size": "s", "styleNumber": "35201482" }, { "id": "55789b1059c84b001c0bb975", "productId": "FP-26097428-000", "skuId": "26097444", "displayName": "FP One Quilted Dog Bed", "image": "http://img2.fpassets.com/is/image/FreePeople/26097428_000_a", "quantity": 2, "totalPrice": 396, "color": "multi", "size": "l", "styleNumber": "26097428" }, { "id": "55789b1059c84b001f0f03bd", "productId": "FP-32065690-000", "skuId": "33506320", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_031_a", "quantity": 2, "totalPrice": 116, "color": "mapleleaf", "size": "l", "styleNumber": "32065690" }, { "id": "55789b10a0ebba001805b438", "productId": "FP-32065690-000", "skuId": "33506619", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_031_a", "quantity": 2, "totalPrice": 116, "color": "mapleleaf", "size": "xl", "styleNumber": "32065690" }, { "id": "55789b10a0ebba001e50c932", "productId": "FP-32065690-000", "skuId": "33506379", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_051_a", "quantity": 3, "totalPrice": 174, "color": "blackberry", "size": "xs", "styleNumber": "32065690" }, { "id": "55789b10a0ebba001bfbe88a", "productId": "FP-32065690-000", "skuId": "33506304", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_031_a", "quantity": 3, "totalPrice": 174, "color": "mapleleaf", "size": "s", "styleNumber": "32065690" }, { "id": "55789b1059c84b001f0f03bc", "productId": "FP-32065690-000", "skuId": "33506312", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_031_a", "quantity": 3, "totalPrice": 174, "color": "mapleleaf", "size": "m", "styleNumber": "32065690" }, { "id": "55789b0f59c84b001c0bb974", "productId": "FP-32065690-000", "skuId": "33506395", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_051_a", "quantity": 2, "totalPrice": 116, "color": "blackberry", "size": "m", "styleNumber": "32065690" }, { "id": "55789b0f59c84b001c0bb973", "productId": "FP-32065690-000", "skuId": "33506346", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_032_a", "quantity": 2, "totalPrice": 116, "color": "forestgreen", "size": "s", "styleNumber": "32065690" }, { "id": "55789b0fa0ebba001a6b7bcf", "productId": "FP-32065690-000", "skuId": "33506361", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_032_a", "quantity": 3, "totalPrice": 174, "color": "forestgreen", "size": "l", "styleNumber": "32065690" }, { "id": "55789b0f59c84b00170fe4f0", "productId": "FP-32065690-000", "skuId": "33506338", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_032_a", "quantity": 3, "totalPrice": 174, "color": "forestgreen", "size": "xs", "styleNumber": "32065690" }, { "id": "55789b0fa0ebba00173c8b1e", "productId": "FP-32065690-000", "skuId": "33506635", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_051_a", "quantity": 3, "totalPrice": 174, "color": "blackberry", "size": "xl", "styleNumber": "32065690" }, { "id": "55789b0fa0ebba00173c8b1c", "productId": "FP-32065690-000", "skuId": "33506353", "displayName": "We The Free Rory Tee", "image": "http://img2.fpassets.com/is/image/FreePeople/32065690_032_a", "quantity": 3, "totalPrice": 174, "color": "forestgreen", "size": "m", "styleNumber": "32065690" }]
        };
    }
    
})();
