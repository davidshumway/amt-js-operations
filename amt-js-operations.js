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
  var service = "AWSMechanicalTurkRequester";
  var timestamp = new Date().toISOString();
  var str = service + options.operation + timestamp;
  var signature = CryptoJS.HmacSHA1(str, options.secret_key).toString(CryptoJS.enc.Base64);
  return {
    operation: options.operation,
    secret_key: options.secret_key,
    service: service,
    timestamp: timestamp,
    signature: signature,
    url_encoded_timestamp: encodeURIComponent(timestamp),
    url_encoded_signature: encodeURIComponent(signature),
  }
}
