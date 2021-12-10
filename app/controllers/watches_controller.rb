class WatchesController < ApplicationController
    def index
        watches = Watch.all
        render json: watches, each_serializer: WatchSerializer
    end

    def show
        watch = Watch.find(params[:id])
        render json: watch
    end
end
