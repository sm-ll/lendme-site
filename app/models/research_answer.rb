class ResearchAnswer < ActiveRecord::Base

  validates :q1_value, presence: true, if: Proc.new { |a| self.q2_value.blank? }
  validates :q2_value, presence: true, if: Proc.new { |a| self.q1_value.blank? }

end
