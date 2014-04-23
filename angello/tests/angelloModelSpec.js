describe('Service: angelloModel', function() {

    beforeEach(module('Angello'));
    var modelService;

    beforeEach(inject(function(angelloModel) {
        modelService = angelloModel;
    }));

    describe('#getStatus', function () {
        it('should return seven different statuses', function() {
            expect(modelService.getStatuses().length).toBe(7);
        });
    });
});