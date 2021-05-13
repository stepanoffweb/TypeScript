// структурируют код с однотипными элементами
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard; // 1
var membershipReverse = Membership[2]; // Premium
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VKontakte";
    SocialMedia["FB"] = "Facebook";
    SocialMedia["INST"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
var social1 = SocialMedia.VK; // VKontakte
