const { serve } = require('./request')

serve.get('/api/index').then(res => {
    console.log('res', res)
})