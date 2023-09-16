output "s3_hosting_bucket_url" {
  description = "The URL of the S3 hosting bucket"
  value       = aws_s3_bucket.hosting_bucket.bucket_domain_name
}

output "cloudfront_distribution_endpoint" {
  description = "The endpoint URL of the CloudFront distribution"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}
