// структурируют код с однотипными элементами
enum Membership {
  Simple,
  Standard,
  Premium
}
const membership = Membership.Standard// 1
const membershipReverse = Membership[2];// Premium

enum SocialMedia {
  VK = 'VKontakte',
  FB = 'Facebook',
  INST = 'Instagram'
}

const social1 = SocialMedia.VK; // VKontakte
