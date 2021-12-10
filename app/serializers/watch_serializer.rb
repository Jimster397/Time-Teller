class WatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :imageurl
  has_one :user
end
