<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <samp><h1 class="text-center col my-0" style="font-weight: bolder;">{{$t('home.patch_note')}}</h1></samp>
        </div>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="py-1 pb-3 mt-n2">
                    <samp><b>{{$t('home.next_version')}}</b></samp>
                </div>
            </div>
            <div class="col-5 wrap">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/HVJsHs2PmZ0"></iframe>
            </div>
            <div class="col-5 wrap">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/ZmRjLa8Wy9I"></iframe>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-5 wrap">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/8JRn63wV2UA"></iframe>
            </div>
            <div class="col-5 wrap">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/BryAnEXAs2o"></iframe>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrap {
  margin: 0 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  @media only screen and (max-width: 420px) {
    flex: 0 0 83.333333% !important;
    max-width: 83.333333% !important;
    padding-top: 50%;
    margin-bottom: 2rem;
  }
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>