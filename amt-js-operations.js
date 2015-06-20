/**
 *
 */
var amt = function() {
  /**
   *
   */
  this.opts = ["ApproveAssignment","ApproveRejectedAssignment","AssignQualification","BlockWorker","ChangeHITTypeOfHIT","CreateHIT","CreateQualificationType","DisableHIT","DisposeHIT","DisposeQualificationType","ExtendHIT","ForceExpireHIT","GetAccountBalance","GetAssignment","GetAssignmentsForHIT","GetBlockedWorkers","GetBonusPayments","GetFileUploadURL","GetHIT","GetHITsForQualificationType","GetQualificationsForQualificationType","GetQualificationRequests","GetQualificationScore","GetQualificationType","GetReviewableHITs","GetReviewResultsForHIT","GetRequesterStatistic","GetRequesterWorkerStatistic","GrantBonus","GrantQualification","NotifyWorkers","RegisterHITType","RejectAssignment","RejectQualificationRequest","RevokeQualification","SearchHITs","SearchQualificationTypes","SendTestEventNotification","SetHITAsReviewing","SetHITTypeNotification"];
}
/**
 * function generate_signature
 * @param options Object containing strings "operation" and "secret_key".
 * @return Object containing keys "service", "operation", "timestamp", and "signature"
 */
amt.prototype.generate_signature = function(options) {
  var g = {
    operation: options.operation,
    secret_key: options.secret_key,
    service: "AWSMechanicalTurkRequester",
    timestamp: null,
    signature: null,
    url_encoded_timestamp: null,
    url_encoded_signature: encodeURIComponent(signature),
    stub_url: null
  }
  g.timestamp = new Date().toISOString();
  g.url_encoded_timestamp = encodeURIComponent(g.timestamp);
  var s = g.service + g.operation + g.timestamp;
  g.signature = CryptoJS.HmacSHA1(s, g.secret_key).toString(CryptoJS.enc.Base64);
  g.url_encoded_signature = encodeURIComponent(g.signature);
  var stub =
    'https://mechanicalturk.amazonaws.com/?Service='+encodeURIComponent(g.service)+
    '&Version=2014-08-15'+
    '&Operation='+encodeURIComponent(g.operation)+
    '&Signature='+g.url_encoded_signature+
    '&Timestamp='+g.url_encoded_timestamp
  ;
  return g;
}
