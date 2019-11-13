# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  album_id    :integer
#  views       :integer          not null
#  faves_num   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
    validates :title, presence: true

    validate :ensure_image

    has_one_attached :image
    has_many_attached :images

    belongs_to :user

    def ensure_image
        unless self.image.attached?
            errors[:image] << "must be attached"
        end
    end
end
