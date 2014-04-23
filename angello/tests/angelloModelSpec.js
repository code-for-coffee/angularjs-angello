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
        it('should have a status named "To Do"', function () {
            expect(modelService.
            getStatuses().
            map(function (status) { // get just the name of each status
                return status.name;
            })).
            toContain('To Do');
        });
    });
});