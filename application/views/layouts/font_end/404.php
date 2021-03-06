<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
<style type="text/css">
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>404 Not Found</h1>
                <div class="error-details">Sorry, an error has occured, Requested page not found!</div>
                <div class="error-actions">
                    <a href="<?=base_url()?>" class="btn btn-primary btn-lg">
                        <span class="glyphicon glyphicon-home"></span>Take Me Home
                    </a>
                    <!-- <a href="http://www.jquery2dotnet.com" class="btn btn-default btn-lg">
                        <span class="glyphicon glyphicon-envelope"></span> Contact Support
                    </a> -->
                </div>
            </div>
        </div>
    </div>
</div>