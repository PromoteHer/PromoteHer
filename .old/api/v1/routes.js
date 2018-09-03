const express = require('express');
const router = express.Router();

router.get('/posts', function(req, res) {
    res.json(
        [
            {
                "post": {
                    "id": "1",
                    "message": "Congratulations to @BekiOvitate rehentis ernatem consedit lautatur autemque natibus, officabor moluptor aut reheniende #errum illaccum lat maximil ium dolorem volorib usaperest veles ut adis alibus es eos pra dit harcius ciisquos repernat autemque natibus, officabor sfn moluptur.",
                    "likes": 12345
                }
            }
        ]
    );
});

module.exports = router;