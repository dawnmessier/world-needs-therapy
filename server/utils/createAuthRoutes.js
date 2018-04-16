module.exports = function(router, controller, checkUser) {
    router.param('id', controller.params);

    router.route('/')
      .get(controller.get)
      .post(checkUser, controller.post)

    router.route('/:id')
      .get(controller.getOne)
      .put(checkUser, controller.put)
      .delete(checkUser, controller.delete)

    module.exports = router;
}
