enum Membership {
  Simple,
  Standard,
  Premium
}
const membership = Membership.Standard
console.log(membership);// 1
const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
  VK = 'VKontakte',
  FB = 'Facebook',
  INST = 'Instagram'
}

const social1 = SocialMedia.VK;
console.log(social1);// VKontakte
